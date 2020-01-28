import { Module } from '@nestjs/common';
import { PoiService } from './poi.service';

@Module({
  providers: [PoiService]
})
export class PoiModule {}
