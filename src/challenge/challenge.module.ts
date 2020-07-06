import { Module } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { ChallengeController } from './challenge.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Challenge } from './challengeEntity';
import { JoinUserChallengeModule } from '../join-user-challenge/join-user-challenge.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Challenge]),
    JoinUserChallengeModule,
  ],
  providers: [ChallengeService],
  controllers: [ChallengeController],
  exports: [ChallengeService],
})
export class ChallengeModule {}
