import {ImATeapotException, Injectable, UnauthorizedException} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import {AuthService} from './auth.service';
import {Strategy} from 'passport-local';

/**
 * Class use when client try to connect to their account
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  /**
   * set authService
   * @param authService {AuthService}
   */
  constructor(private readonly authService: AuthService) {
    super();
  }

  /**
   * check if user exist and return them else send an exception
   * @param mail {string}
   * @param password {string}
   */
  async validate(mail: string, password: string) {
    const user = await this.authService.validateUser(mail, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
