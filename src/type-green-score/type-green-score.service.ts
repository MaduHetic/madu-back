import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeGreenScore } from './typeGreenScoreEntity';
import { Repository } from 'typeorm';
import { PercentAndIdTag } from '../poi/percentAndIdTag';

@Injectable()
export class TypeGreenScoreService {
  constructor(
    @InjectRepository(TypeGreenScore)
    private readonly typeGreenScoreRepository: Repository<TypeGreenScore>,
  ) {}

  async addGreenScore(typeGreenScoreDto) {
    return await this.typeGreenScoreRepository.save(typeGreenScoreDto);
  }

  async getAllType(): Promise<TypeGreenScore[]> {
    return await this.typeGreenScoreRepository.find();
  }

  async getType(idType: number): Promise<TypeGreenScore> {
    return await this.typeGreenScoreRepository.findOneOrFail(idType)
      .catch(() => {
        throw new NotFoundException(`Type Green Score With id ${idType} Not Found`);
      });
  }

  async deleteTypeGreenScore(idTypeGreenScore) {
    const typeGreenScore = await this.getType(idTypeGreenScore);
    return await this.typeGreenScoreRepository.delete(typeGreenScore);
  }

  async getByIds(idTypes: number[]) {
    return await this.typeGreenScoreRepository.findByIds(idTypes);
  }
}
