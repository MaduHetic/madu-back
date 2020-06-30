import { IsDateString, IsString } from 'class-validator';

export class KnowItDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  publicationDate: string;
}
