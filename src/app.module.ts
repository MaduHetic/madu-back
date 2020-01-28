import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { PoiModule } from './poi/poi.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [AuthModule, UserModule, RoleModule, PoiModule, CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
