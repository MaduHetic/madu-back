import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './userEntity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { RoleService } from '../role/role.service';
import { Role } from '../role/roleEntity';

@Injectable()
export class UserService {
  /**
   *
   * @param userRepository
   * @param roleService
   */
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly roleService: RoleService,
  ) {}

  /**
   *
   * @param password
   */
  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  /**
   *
   * @param userDto
   */
  async addUser(userDto) {
    const user = userDto;
    user.password = await this.hashPassword(user.password);
    user.role = await this.roleService.getOneOrFailByRole(user.role);
    return this.userRepository.save(user);
  }

  /**
   *
   * @param eMail
   */
  async getUserByMail(eMail: string) {
    return this.userRepository.findOneOrFail({
      where: {
        mail: eMail,
      },
    }).catch(() => {
      throw new NotFoundException(`User ${eMail} not found`);
    });
  }

  /**
   *
   * @param userId
   */
  async getUser(userId: number) {
    return await this.userRepository.findOneOrFail(userId, {
      relations: ['role'],
    })
      .catch(() => {
        throw new NotFoundException(`user with ${userId} not found`);
      });
  }
}
