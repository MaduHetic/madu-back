import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Challenge } from './challengeEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/userEntity';
import { JoinUserChallengeService } from '../join-user-challenge/join-user-challenge.service';

@Injectable()
export class ChallengeService {
  constructor(
    @InjectRepository(Challenge)
    private readonly challengeRepository: Repository<Challenge>,
    private readonly joinUserChallengeService: JoinUserChallengeService,
  ) {}

  async addChallenge(challengeDto) {
    challengeDto.crystalGain = challengeDto.gain;
    return await this.challengeRepository.save(challengeDto);
  }

  async getChallenge(): Promise<Challenge[]> {
    return await this.challengeRepository.find();
  }

  async getCurrentChallenge(user) {
    const challenges = await this.challengeRepository.find();
    return await Promise.all(challenges.map(async (challenge: any) => {
      challenge.doIt = !!(await this.joinUserChallengeService.checkValidation(user.user, challenge));
      return challenge;
    }));
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
