import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../user/user.service';

/**
 * Class use when the client send request with a jwt in request header
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   * set the option for jwt and set the jwt secret key,
   * @param userService {UserService}
   */
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_TOKEN || 'helloo',
    });
  }

  /**
   * Check the validity of data contains in jwt and return user info without password
   * @param payload
   */
  async validate(payload) {
    if (!payload.userId) {
      throw new UnauthorizedException();
    }
    // tslint:disable-next-line:no-console
    const {password, ...result} =  await this.userService.getUser(payload.userId);
    return result;
  }
}
