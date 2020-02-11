import { Module } from '@nestjs/common';
import { PoiService } from './poi.service';
import { PriceEnum } from './enum/price.enum';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poi } from './poiEntity';
import { PoiController } from './poi.controller';
import { TagsModule } from '../tags/tags.module';
import { JoinTagPoiModule } from '../join-tag-poi/join-tag-poi.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Poi]),
    TagsModule,
    JoinTagPoiModule,
  ],
  providers: [PoiService],
  controllers: [PoiController],
  exports: [PoiService],
})
export class PoiModule {}
