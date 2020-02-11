import { TagsInterface } from './interfaces/tags.interface';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TagsDto implements TagsInterface {
  @ApiProperty({
    description: 'name of tag (ex: bio, vegan etc...)',
  })
  @IsString()
  readonly tag: string;
}
