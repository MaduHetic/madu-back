import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { RoleModule } from '../role/role.module';

@Module({
  imports: [
    UserModule,
    PassportModule,
    PassportModule.register({defaultStrategy: 'local'}),
    RoleModule,
    JwtModule.register({
      secret: process.env.JWT_TOKEN || 'Helloo',
      signOptions: {expiresIn: '3600s'},
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
