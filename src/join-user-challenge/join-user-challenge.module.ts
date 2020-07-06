import { Module } from '@nestjs/common';
import { JoinUserChallengeService } from './join-user-challenge.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JoinUserChallenge } from './joinUserChallengeEntity';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';
import { JoinUserChallengeDto } from './joinUserChallengeDto';

@Module({
  imports: [
    TypeOrmModule.forFeature([JoinUserChallenge]),
    UserModule,
  ],
  providers: [JoinUserChallengeService],
  exports: [JoinUserChallengeService],
})
export class JoinUserChallengeModule {}
