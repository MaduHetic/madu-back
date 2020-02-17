import {Controller, Post, UseGuards, Request, Get} from '@nestjs/common';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from '@nestjs/passport';
import { AccessToken } from './auth/access-token';
import { RoleGuard } from './guard/role.guard';
import { Roles } from './decorator/role.decorator';

/**
 * This controller contains the routes to connect and retrieve your profile
 */
@Controller()
export class AppController {
  constructor(readonly authService: AuthService) {}

  /**
   * the call of this method allows to recover a jwt token
   * @param req {Request}
   * @return {AccessToken}
   */
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req): Promise<AccessToken> {
    // tslint:disable-next-line:no-console
    return await this.authService.login(req.user);
  }

  /**
   * This method allows get account information from jwt token
   * @param req {Request}
   */
  @UseGuards(AuthGuard('jwt'))
  @UseGuards(RoleGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }
}
