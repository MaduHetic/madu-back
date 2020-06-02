import { Module } from '@nestjs/common';
import { QuestionQuizzService } from './question-quizz.service';
import { QuestionQuizzController } from './question-quizz.controller';

@Module({
  providers: [QuestionQuizzService],
  controllers: [QuestionQuizzController],
})
export class QuestionQuizzModule {}
