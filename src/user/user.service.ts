import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './userEntity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { RoleService } from '../role/role.service';
import { Role } from '../role/roleEntity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly roleService: RoleService,
  ) {}

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  async addUser(userDto) {
    const user = userDto;
    user.password = await this.hashPassword(user.password);
    user.role = await this.roleService.getOneOrFailByRole(user.role);
    return this.userRepository.save(user);
  }

  async getUserByMail(eMail: string) {
    return this.userRepository.findOneOrFail({
      where: {
        mail: eMail,
      },
    }).catch(() => {
      throw new NotFoundException(`User ${eMail} not found`);
    });
  }

  async getUser(userId: number) {
    return await this.userRepository.findOneOrFail(userId, {
      relations: ['role'],
    })
      .catch(() => {
        throw new NotFoundException(`user with ${userId} not found`);
      });
  }
}
