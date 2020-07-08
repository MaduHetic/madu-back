import { SubmitDto } from './submitDto';
import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class ValidationDto {
  @IsNumber()
  @ApiProperty()
  readonly idThemeQuizz: number;

  @ApiProperty()
  @IsDefined()
  @ValidateNested()
  @Type(() => SubmitDto)
  answers: [SubmitDto];
}
