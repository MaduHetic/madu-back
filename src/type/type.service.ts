import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Type } from './typeEntity';
import { Repository } from 'typeorm';
import { TypeEnum } from '../company/enum/type.enum';

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

  async getType() {
    const types = TypeEnum;
    const stringType: string[] = [];
    for (const n in types) {
      if (typeof types[n] === 'string') {
        stringType.push(types[n]);
      }
    }
    return stringType;
  }
}
