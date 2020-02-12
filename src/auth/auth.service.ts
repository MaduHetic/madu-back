import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AccessToken } from './access-token';

/**
 * Class contains some method for the authentication check https://docs.nestjs.com/techniques/authentication for more informations
 */
@Injectable()
export class AuthService {
  /**
   * set userService and jwtService
   * @param userService {UserService}
   * @param jwtService {JwtService}
   */
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   *  Method who check if the login password is correct and return the result without password return null if not
   * @param mail {string}
   * @param pass {string}
   * @returns {object} || null
   */
  async validateUser(mail: string, pass: string) {
    const user = await this.userService.getUserByMail(mail);
    if (user &&  await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  /**
   * Method who create en send a jwt
   * @param user
   * @returns {AccessToken}
   */
  async login(user): Promise<AccessToken> {
    const payload = { userId: user.id, mail: user.mail };
    const token = await this.jwtService.signAsync(payload);
    return new AccessToken(token);
  }
}
