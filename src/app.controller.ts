import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth/login')
  @UseGuards(AuthGuard('local'))
  async backOfficeLogin(@Request() req) {
    return 'Login';
  }
}
