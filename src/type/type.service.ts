import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Type } from './typeEntity';
import { Repository } from 'typeorm';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(Type)
    private readonly typeRepository: Repository<Type>,
  ) {}

  async addType(typeDto) {
    return await this.typeRepository.save(typeDto);
  }

  async getOneType(idType: number): Promise<Type> {
    return await this.typeRepository.findOneOrFail(idType)
      .catch(() => {
        throw new NotFoundException(`Type with id ${idType} not found`);
      });
  }

  async getAllType(): Promise<Type[]> {
    return await this.typeRepository.find();
  }

  async deleteType(idType: number) {
    return await this.typeRepository.delete(idType);
  }

  async getTypes(idsTypes: number[]): Promise<Type[]> {
      return await this.typeRepository.findByIds(idsTypes);
  }
}
