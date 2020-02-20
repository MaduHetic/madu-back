import { Module } from '@nestjs/common';
import { JoinTagPoiService } from './join-tag-poi.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JoinTagPoiEntity } from './joinTagPoiEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([JoinTagPoiEntity]),
  ],
  providers: [JoinTagPoiService],
  exports: [JoinTagPoiService],
})
export class JoinTagPoiModule {}
