import { Controller, Post, UseGuards, Request, Get, Body } from '@nestjs/common';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from '@nestjs/passport';
import { AccessToken } from './auth/access-token';
import { RoleGuard } from './guard/role.guard';
import { Roles } from './decorator/role.decorator';
import { ApiBasicAuth, ApiBearerAuth, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { LoginDto } from './loginDto';

/**
 * This controller contains the routes to connect and retrieve your profile
 */
@ApiTags('login')
@Controller()
export class AppController {
  constructor(readonly authService: AuthService) {}

  /**
   * the call of this method allows to recover a jwt token
   * @param req {Request}
   * @param toto
   * @return {AccessToken}
   */
  @ApiOkResponse()
  @ApiUnauthorizedResponse()
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req, @Body() toto: LoginDto): Promise<AccessToken> {
    // tslint:disable-next-line:no-console
    return await this.authService.login(req.user);
  }

  /**
   * This method allows get account information from jwt token
   * @param req {Request}
   */
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @ApiOkResponse()
  @UseGuards(AuthGuard('jwt'))
  // @UseGuards(RoleGuard)
  // @Roles('user')
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }
}
