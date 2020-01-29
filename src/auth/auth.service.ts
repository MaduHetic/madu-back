import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(mail: string, pass: string) {
    const user = await this.userService.getUserByMail(mail);
    if (user &&  await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user): Promise<object> {
    const payload = { userId: user.id, mail: user.mail };
    const token = await this.jwtService.signAsync(payload);
    return {
      access_token: token,
    };
  }
}
