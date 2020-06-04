import { IsBoolean, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class QuestionQuizzDto {
  @ApiProperty()
  @IsString()
  readonly answer: string;

  @ApiProperty()
  @IsBoolean()
  readonly goodAnswer: boolean;
}
