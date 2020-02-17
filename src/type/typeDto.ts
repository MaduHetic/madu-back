import { TypeInterface } from './interface/type.interface';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TypeDto implements TypeInterface {

  @ApiProperty({
    description: 'Type of company (ex: Co-Working, PME, etc...)',
  })
  @IsString()
  readonly type: string;
}
