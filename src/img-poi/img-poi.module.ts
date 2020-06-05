import { Module } from '@nestjs/common';
import { ImgPoiService } from './img-poi.service';

@Module({
  providers: [ImgPoiService]
})
export class ImgPoiModule {}
