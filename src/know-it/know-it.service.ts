import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { KnowIt } from './knowItEntity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class KnowItService {
  constructor(
    @InjectRepository(KnowIt)
    private readonly knowItRepository: Repository<KnowIt>,
  ) {}

  async addKnowIt(knowIt) {
    return await this.knowItRepository.save(knowIt);
  }

  async getKnowIt() {
    return await this.knowItRepository.find({
      select: ['id', 'title', 'description'],
    });
  }

  async deleteKnowIt(idKnowIt: number) {
    return await this.knowItRepository.delete(idKnowIt);
  }
}
