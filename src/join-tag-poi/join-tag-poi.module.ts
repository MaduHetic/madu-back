import { Module } from '@nestjs/common';
import { JoinTagPoiService } from './join-tag-poi.service';

@Module({
  providers: [JoinTagPoiService]
})
export class JoinTagPoiModule {}
