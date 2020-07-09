import { IsDate, IsDateString, IsMilitaryTime, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChallengeDto {
  @IsString()
  @ApiProperty()
  readonly description: string;

  @IsNumber()
  @ApiProperty()
  readonly gain: number;

  @IsString()
  @ApiProperty()
  readonly publicationDate: string;
}
