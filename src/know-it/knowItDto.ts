import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { KnowItInterface } from './know-it.interface';

export class KnowItDto implements KnowItInterface {
  @IsString()
  @ApiProperty()
  readonly title: string;

  @IsString()
  @ApiProperty({})
  readonly description: string;

  @IsString()
  @ApiProperty()
  readonly publicationDate: string;
}
