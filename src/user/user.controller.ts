import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe, Request, Redirect } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './userDto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AppUserDto } from './appUserDto';
import { AuthGuard } from '@nestjs/passport';

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
  @Redirect('/auth/login', 308)
  @UsePipes(new ValidationPipe({transform: true}))
  async addAppUser(@Body() appUserDto: AppUserDto) {
    return await this.userService.addUserApp(appUserDto);
  }

  @Get('test/:em')
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe({transform: true}))
  async addEm(@Param('em', new ParseIntPipe()) em: number, @Request() user) {
    return await this.userService.addCrystal(em, user.user);
  }
}
