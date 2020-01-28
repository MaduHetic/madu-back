import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './roleEntity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRoleRepository: Repository<Role>,
  ) {}

  async getOneOrFailByRole(roleType: string) {
    return await this.roleRoleRepository.findOneOrFail({
      where: {
        role: roleType,
      },
    }).catch(() => {
      throw new NotFoundException(`Role ${roleType} not found`);
    });
  }
}
