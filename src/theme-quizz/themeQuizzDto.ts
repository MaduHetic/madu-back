import { IsDefined, IsString, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { QuizzAndQuestionDto } from '../quizz/quizzAndQuestionDto';
import { Type } from 'class-transformer';

export class ThemeQuizzDto {
  @IsString()
  @ApiProperty()
  readonly theme: string;

  @IsString()
  @ApiProperty()
  readonly imgBackground: string;

  @IsString()
  @ApiProperty()
  readonly publicationDate?: string;

  @ApiProperty()
  @IsDefined()
  @ValidateNested()
  @Type(() => QuizzAndQuestionDto)
  readonly infoQuizz: [QuizzAndQuestionDto];
}
