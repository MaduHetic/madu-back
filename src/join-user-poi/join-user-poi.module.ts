import { Module } from '@nestjs/common';
import { JoinUserPoiService } from './join-user-poi.service';

@Module({
  providers: [JoinUserPoiService]
})
export class JoinUserPoiModule {}
