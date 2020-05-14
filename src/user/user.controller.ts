import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './userDto';
import { RoleGuard } from '../guard/role.guard';
import { Roles } from '../decorator/role.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AppUserDto } from './appUserDto';

/**
 * User controller
 */
@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(readonly userService: UserService) {}

  /**
   * method call to add new user
   * @param userDto
   */
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async addUser(@Body() userDto: UserDto) {
    return this.userService.addUser(userDto);
  }

  /**
   * method to delete a user
   * @param idUser
   */
  @Delete(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async deleteUer(@Param('id', new ParseIntPipe()) idUser: number) {
    return 'deletUser';
  }

  @Post('app/register')
  @UsePipes(new ValidationPipe({transform: true}))
  async addAppUser(@Body() appUserDto: AppUserDto) {
    return await this.userService.addUserApp(appUserDto);
  }
}
