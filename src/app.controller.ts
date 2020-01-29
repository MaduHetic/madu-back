import {Controller, Post, UseGuards, Request, Get} from '@nestjs/common';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from '@nestjs/passport';
@Controller()
export class AppController {
  constructor(readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    // tslint:disable-next-line:no-console
    return await this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }
}
