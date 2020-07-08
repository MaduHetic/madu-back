import { Module } from '@nestjs/common';
import { JoinUserPoiService } from './join-user-poi.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JoinUserPoi } from './joinUserPoiEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([JoinUserPoi]),
  ],
  providers: [JoinUserPoiService],
  exports: [JoinUserPoiService],
})
export class JoinUserPoiModule {}
