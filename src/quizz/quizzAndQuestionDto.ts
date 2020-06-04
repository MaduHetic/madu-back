import { QuizzDto } from './quizzDto';
import { IsDefined, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { QuestionQuizzDto } from '../question-quizz/questionQuizzDto';
import { ApiProperty } from '@nestjs/swagger';

export class QuizzAndQuestionDto {
  @ApiProperty()
  @IsDefined()
  @ValidateNested()
  @Type(() => QuizzDto)
  readonly question: QuizzDto;

  @ApiProperty()
  @IsDefined()
  @ValidateNested()
  @Type(() => QuestionQuizzDto)
  readonly answers: [QuestionQuizzDto];
}
