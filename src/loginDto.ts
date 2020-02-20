import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty()
  @IsEmail()
  readonly username: string;

  @ApiProperty()
  @IsString()
  readonly password: string;
}
