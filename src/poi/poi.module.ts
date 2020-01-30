import { Module } from '@nestjs/common';
import { PoiService } from './poi.service';
import { PriceEnum } from './enum/price.enum';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poi } from './poiEntity';
import { PoiController } from './poi.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Poi]),
  ],
  providers: [PoiService],
  controllers: [PoiController],
})
export class PoiModule {}
