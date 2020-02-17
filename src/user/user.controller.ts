import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './userDto';
import { RoleGuard } from '../guard/role.guard';
import { Roles } from '../decorator/role.decorator';

/**
 * User controller
 */
@Controller('user')
export class UserController {
  constructor(readonly userService: UserService) {}

  /**
   * method call to add new user
   * @param userDto
   */
  @UseGuards(RoleGuard)
  @Roles('admin')
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async addUser(@Body() userDto: UserDto) {
    return this.userService.addUser(userDto);
  }

  /**
   * test
   */
  @UseGuards(RoleGuard)
  @Roles('admin')
  @Get('test')
  async toto() {
    // tslint:disable-next-line:no-console
    console.log('toto');
    return 'TOTOT';
  }
}
