import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Type } from './typeEntity';
import { Repository } from 'typeorm';

@Injectable()
export class TypeService {
  /**
   *
   * @param typeRepository
   */
  constructor(
    @InjectRepository(Type)
    private readonly typeRepository: Repository<Type>,
  ) {}

  /**
   *
   * @param typeDto
   */
  async addType(typeDto) {
    return await this.typeRepository.save(typeDto);
  }

  /**
   *
   * @param idType
   */
  async getOneType(idType: number): Promise<Type> {
    return await this.typeRepository.findOneOrFail(idType)
      .catch(() => {
        throw new NotFoundException(`Type with id ${idType} not found`);
      });
  }

  /**
   *
   */
  async getAllType(): Promise<Type[]> {
    return await this.typeRepository.find();
  }

  /**
   *
   * @param idType
   */
  async deleteType(idType: number) {
    return await this.typeRepository.delete(idType);
  }

  /**
   *
   * @param idsTypes
   */
  async getTypes(idsTypes: number[]): Promise<Type[]> {
      return await this.typeRepository.findByIds(idsTypes);
  }
}
