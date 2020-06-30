import { PassportStrategy } from '@nestjs/passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import { UnauthorizedException } from '@nestjs/common';

export class TestStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: process.env.JWT_TOKEN || 'hello',
    });
  }

  async validate(payload) {
    if (!payload.userId) {
      throw new UnauthorizedException();
    }
    // tslint:disable-next-line:no-console
    // return result;
    return {
      user: 'toto',
    };
  }
}
