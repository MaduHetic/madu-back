import { Module } from '@nestjs/common';
import { QuizzService } from './quizz.service';
import { QuizzController } from './quizz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quizz } from './quizzEntity';
import { QuestionQuizzService } from '../question-quizz/question-quizz.service';
import { QuestionQuizzModule } from '../question-quizz/question-quizz.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Quizz]),
    QuestionQuizzModule,
  ],
  providers: [QuizzService],
  controllers: [QuizzController],
})
export class QuizzModule {}
