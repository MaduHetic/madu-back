import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Challenge } from './challengeEntity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ChallengeService {
  constructor(
    @InjectRepository(Challenge)
    private readonly challengeRepository: Repository<Challenge>,
  ) {}

  async addChallenge(challengeDto) {
    return await this.challengeRepository.save(challengeDto);
  }

  async getChallenge(): Promise<Challenge[]> {
    return await this.challengeRepository.find();
  }

  async findOne(idChallenge: number): Promise<Challenge> {
    return await this.challengeRepository.findOneOrFail(idChallenge)
      .catch(() => {
        throw new NotFoundException(`Challenge with id ${idChallenge} Not Found`);
      });
  }

  async deleteChallenge(idChallenge: number) {
    const challenge = await this.findOne(idChallenge);
    return await this.challengeRepository.remove(challenge);
  }
}
