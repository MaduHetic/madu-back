import { IsDate, IsDateString, IsMilitaryTime, IsNumber, IsString } from 'class-validator';

export class ChallengeDto {
  @IsString()
  readonly description: string;

  @IsNumber()
  readonly gain: number;

  @IsString()
  readonly publicationDate: string;
}
