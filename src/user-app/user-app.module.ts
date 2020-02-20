import { Module } from '@nestjs/common';
import { UserAppService } from './user-app.service';

@Module({
  providers: [UserAppService]
})
export class UserAppModule {}
