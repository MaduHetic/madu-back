import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './roleEntity';
import { Repository } from 'typeorm';

/**
 * Role service
 */
@Injectable()
export class RoleService {
  /**
   *
   * @param roleRoleRepository {Repository<Role>}
   */
  constructor(
    @InjectRepository(Role)
    private readonly roleRoleRepository: Repository<Role>,
  ) {}

  /**
   * @param roleType
   */
  async getOneOrFailByRole(roleType: string) {
    return await this.roleRoleRepository.findOneOrFail({
      where: {
        role: roleType,
      },
    }).catch(() => {
      throw new NotFoundException(`Role ${roleType} not found`);
    });
  }

  /**
   * @param idRole {number}
   */
  async getInfRole(idRole: number): Promise<Role[]> {
    return await this.roleRoleRepository.createQueryBuilder()
      .select('role')
      .where(`id = :id`, { id: idRole })
      .orWhere('id > :idSup', { idSup: idRole  })
      .getRawMany();
  }

  async getOnlyRole(roles): Promise<string[]> {
    return roles.map((role) => {
      return role.role;
    });
  }
}
