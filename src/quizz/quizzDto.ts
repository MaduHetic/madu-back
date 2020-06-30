import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class QuizzDto {
  @IsString()
  @ApiProperty()
  readonly question: string;

  @IsNumber()
  @ApiProperty()
  readonly crystalGain: number = 10;

  @IsString()
  @ApiProperty()
  readonly publicationDate?: string;
}
