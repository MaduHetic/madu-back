import {  Module } from '@nestjs/common';
import { PoiService } from './poi.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poi } from './poiEntity';
import { PoiController } from './poi.controller';
import { TagsModule } from '../tags/tags.module';
import { JoinTagPoiModule } from '../join-tag-poi/join-tag-poi.module';
import { TypeModule } from '../type/type.module';
import { PercentTypeGreenScoreAndPoiModule } from '../percent-type-green-score-and-poi/percent-type-green-score-and-poi.module';
import { TypeGreenScoreModule } from '../type-green-score/type-green-score.module';
import { CompanyModule } from '../company/company.module';
import { PoiGeoCalcService } from './poi.geo.calc.service';
import { ImgPoiModule } from '../img-poi/img-poi.module';
import { JoinUserPoiModule } from '../join-user-poi/join-user-poi.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Poi]),
    TagsModule,
    JoinTagPoiModule,
    TypeModule,
    TypeGreenScoreModule,
    PercentTypeGreenScoreAndPoiModule,
    CompanyModule,
    ImgPoiModule,
    JoinUserPoiModule,
  ],
  providers: [PoiService, PoiGeoCalcService],
  controllers: [PoiController],
  exports: [PoiService],
})
export class PoiModule {}
