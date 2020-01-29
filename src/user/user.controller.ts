import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './userDto';

@Controller('user')
export class UserController {
  constructor(readonly userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async addUser(@Body() userDto: UserDto) {
    return this.userService.addUser(userDto);
  }

  @Get('test')
  async toto() {
    // tslint:disable-next-line:no-console
    console.log('toto');
    return 'TOTOT';
  }
}
