import { Module } from '@nestjs/common';
import { JoinUserPoiService } from './join-user-poi.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JoinUserPoi } from './joinUserPoiEntity';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([JoinUserPoi]),
    UserModule,
  ],
  providers: [JoinUserPoiService],
  exports: [JoinUserPoiService],
})
export class JoinUserPoiModule {}
