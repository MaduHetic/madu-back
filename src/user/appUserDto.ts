import { UserInterface } from './interfaces/user.interface';
import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AppUserDto {
  @ApiProperty({
    description: 'first name of user',
  })
  @IsString()
  readonly firstName: string;

  @ApiProperty({
    description: 'last name of user',
  })
  @IsString()
  readonly lastName: string;

  @IsOptional()
  @ApiProperty({
    description: 'email of user',
  })
  @IsEmail()
  readonly mail?: string;

  @ApiProperty({
    description: 'password of user',
  })
  @IsString()
  readonly password: string;

  @ApiProperty({
    description: 'email of user',
  })
  @IsEmail()
  username?: string;
}
