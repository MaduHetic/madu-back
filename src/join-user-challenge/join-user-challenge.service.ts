import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { JoinUserChallenge } from './joinUserChallengeEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { Challenge } from '../challenge/challengeEntity';

@Injectable()
export class JoinUserChallengeService {
  constructor(
    @InjectRepository(JoinUserChallenge)
    private readonly joinUserChallengeRepository: Repository<JoinUserChallenge>,
    private readonly userService: UserService,
  ) {}

  private async getOne(joinUserChallenge) {
    return await this.joinUserChallengeRepository.findOne({
      where: {
        challenge: joinUserChallenge.challenge,
        user: joinUserChallenge.user,
      },
    });
  }

  async addJoinUserChallenge(challenge: Challenge, user, doChallenge: boolean) {
      const userChallenge = {
        challenge,
        user: user.user,
        do: doChallenge,
      };
      if (await this.getOne(userChallenge)) {
        throw new BadRequestException('Already answered');
      }
      await this.joinUserChallengeRepository.save(userChallenge);
      if (doChallenge) {
        await this.userService.addCrystal(challenge.crystalGain, userChallenge.user);
      }
      return await this.userService.getEmerald(userChallenge.user);
  }
}
