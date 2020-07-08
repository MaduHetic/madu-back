import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SubmitDto {
  @IsNumber()
  @ApiProperty()
  readonly idQuizz: number;

  @IsNumber()
  @ApiProperty()
  readonly idAnswer: number;
}
