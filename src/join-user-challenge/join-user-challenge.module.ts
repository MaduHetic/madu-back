import { Module } from '@nestjs/common';
import { JoinUserChallengeService } from './join-user-challenge.service';

@Module({
  providers: [JoinUserChallengeService]
})
export class JoinUserChallengeModule {}
