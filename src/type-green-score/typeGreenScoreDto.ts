import { TypeGreenScoreInterface } from './interfaces/type-green-score.interface';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TypeGreenScoreDto implements TypeGreenScoreInterface{
  @ApiProperty()
  @IsString()
  readonly typeGreenScore: string;
}
