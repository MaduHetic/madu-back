import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { JoinUserChallenge } from './joinUserChallengeEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/userEntity';
import { UserService } from '../user/user.service';
import { JoinUserChallengeDto } from './joinUserChallengeDto';
import { Challenge } from '../challenge/challengeEntity';

@Injectable()
export class JoinUserChallengeService {
  constructor(
    @InjectRepository(JoinUserChallenge)
    private readonly joinUserChallengeRepository: Repository<JoinUserChallenge>,
    private readonly userService: UserService,
  ) {}

  async addJoinUserChallenge(challenge: Challenge, user: User, doChallenge: boolean) {
      const userChallenge = {
        challenge,
        user,
        do: doChallenge,
      };
      await this.joinUserChallengeRepository.save(userChallenge);
      if (doChallenge) {
        await this.userService.addCrystal(challenge.crystalGain, user);
      }
      return await this.userService.getEmerald(user);
  }
}
