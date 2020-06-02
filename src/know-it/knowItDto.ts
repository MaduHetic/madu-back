import { IsDateString, IsString } from 'class-validator';

export class KnowItDto {
  @IsString()
  title: string;

  @IsString()
  knowIt: string;

  @IsString()
  publicationDate: string;
}
