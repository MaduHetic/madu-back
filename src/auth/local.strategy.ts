import {ImATeapotException, Injectable, UnauthorizedException} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import {AuthService} from './auth.service';
import {Strategy} from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(mail: string, password: string) {
    const user = await this.authService.validateUser(mail, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
