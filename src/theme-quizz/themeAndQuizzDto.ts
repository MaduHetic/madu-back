import { IsDefined, IsString, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { QuizzAndQuestionDto } from '../quizz/quizzAndQuestionDto';
import { ThemeQuizzDto } from './themeQuizzDto';

export class ThemeAndQuizzDto {

  @ApiProperty()
  @IsDefined()
  @ValidateNested()
  @Type(() => ThemeQuizzDto)
  readonly theme: ThemeQuizzDto;

  @ApiProperty()
  @IsDefined()
  @ValidateNested()
  @Type(() => QuizzAndQuestionDto)
  readonly infoQuizz: [QuizzAndQuestionDto];
}
