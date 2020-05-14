import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './userEntity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { RoleService } from '../role/role.service';
import { Role } from '../role/roleEntity';
import { CompanyService } from '../company/company.service';

@Injectable()
export class UserService {
   private USER_ROLE = 'user';

  /**
   *
   * @param userRepository
   * @param roleService
   */
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly roleService: RoleService,
    private readonly companyService: CompanyService,
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

  private async getDomainMail(email: string) {
    return email.split('@')[1];
  }

  async addUserApp(userAppDto) {
    userAppDto.role = await this.roleService.getOneOrFailByRole(this.USER_ROLE);
    userAppDto.company = await this.companyService
      .getCompanyByDomainMail(await this.getDomainMail(userAppDto.mail));
    userAppDto.password = await this.hashPassword(userAppDto.password);
    const {password, ...addData} = await this.userRepository.save(userAppDto);
    return addData;
  }
}
