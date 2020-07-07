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

  async findEmail(mail: string) {
    return await this.userRepository.findOne({
      where: {
        mail,
      },
    });
  }

  /**
   *
   * @param userId
   */
  async getUser(userId: number) {
    return await this.userRepository.findOneOrFail(userId, {
      relations: ['role', 'company'],
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
      .getCompanyByDomainMail(await this.getDomainMail(userAppDto.username));
    userAppDto.password = await this.hashPassword(userAppDto.password);
    userAppDto.mail = userAppDto.username.trim().toLowerCase();
    if (await this.findEmail(userAppDto.mail)) {
      throw new ConflictException('Cette adresse mail existe déjà');
    }
    const {password, ...addData} = await this.userRepository.save(userAppDto);
    return addData;
  }

  async getEmerald(user) {
    return await this.userRepository.findOneOrFail({
      select: ['crystal'],
      where: {
        id: user.id,
      },
    }).catch(() => {
      throw new NotFoundException(`No User Found ${user.id}`);
    });
  }

  async addCrystal(crystal: number, user) {
    const currentCrystal = await this.getEmerald(user);
    const totalCrystal: number = currentCrystal.crystal + crystal;
    const toto = await this.userRepository.createQueryBuilder()
      .update(User)
      .set({crystal: totalCrystal})
      .where('id = :id', {id: user.id})
      .execute();
    return totalCrystal;
  }
}
