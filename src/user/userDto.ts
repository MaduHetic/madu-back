import { UserInterface } from './interfaces/user.interface';
import { IsEmail, IsEnum, IsString } from 'class-validator';
import { RoleEnum } from '../role/enum/role.enum';

export class UserDto implements UserInterface {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsEmail()
  readonly mail: string;

  @IsString()
  readonly password: string;

  @IsEnum(RoleEnum)
  readonly role: string;

}
