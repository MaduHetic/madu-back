import { Module } from '@nestjs/common';
import { ImgPoiService } from './img-poi.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImgPoi } from './imgPoiEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ImgPoi]),
  ],
  providers: [ImgPoiService],
  exports: [ImgPoiService],
})
export class ImgPoiModule {}
