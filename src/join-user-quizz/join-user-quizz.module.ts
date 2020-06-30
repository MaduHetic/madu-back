import { Module } from '@nestjs/common';
import { JoinUserQuizzService } from './join-user-quizz.service';

@Module({
  providers: [JoinUserQuizzService]
})
export class JoinUserQuizzModule {}
