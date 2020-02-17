import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../user/user.service';
import { RoleService } from '../role/role.service';

/**
 * Class use when the client send request with a jwt in request header
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   * set the option for jwt and set the jwt secret key,
   * @param userService {UserService}
   * @param roleService {RoleService}
   */
  constructor(
    private readonly userService: UserService,
    private readonly roleService: RoleService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_TOKEN || 'helloo',
    });
  }

  /**
   * Check the validity of data contains in jwt and return  and set in req.user user info without password
   * @param payload
   */
  async validate(payload) {
    console.log('toto');
    if (!payload.userId) {
      throw new UnauthorizedException();
    }
    const {password, ...result} =  await this.userService.getUser(payload.userId);
    // tslint:disable-next-line:no-console
    const roles = await this.roleService.getInfRole(result.role.id);
   // return result;
    return {
      user: result,
      roles: await this.roleService.getOnlyRole(roles),
    };
  }
}
