import { forwardRef, Module } from '@nestjs/common';
import { PoiService } from './poi.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poi } from './poiEntity';
import { PoiController } from './poi.controller';
import { TagsModule } from '../tags/tags.module';
import { JoinTagPoiModule } from '../join-tag-poi/join-tag-poi.module';
import { TypeModule } from '../type/type.module';
import { PercentTypeGreenScoreAndPoiModule } from '../percent-type-green-score-and-poi/percent-type-green-score-and-poi.module';
import { TypeGreenScoreService } from '../type-green-score/type-green-score.service';
import { TypeGreenScoreModule } from '../type-green-score/type-green-score.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Poi]),
    TagsModule,
    JoinTagPoiModule,
    TypeModule,
    TypeGreenScoreModule,
    PercentTypeGreenScoreAndPoiModule,
  ],
  providers: [PoiService],
  controllers: [PoiController],
  exports: [PoiService],
})
export class PoiModule {}
