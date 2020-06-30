import { Module } from '@nestjs/common';
import { QuestionQuizzService } from './question-quizz.service';
import { QuestionQuizzController } from './question-quizz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionQuizz } from './questionQuizzEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([QuestionQuizz]),
  ],
  providers: [QuestionQuizzService],
  controllers: [QuestionQuizzController],
  exports: [QuestionQuizzService],
})
export class QuestionQuizzModule {}
