import { forwardRef, Module } from '@nestjs/common';
import { PercentTypeGreenScoreAndPoiService } from './percent-type-green-score-and-poi.service';
import { PercentTypeGreenScoreAndPoiController } from './percent-type-green-score-and-poi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PercentTypeGreenScoreAndPoi } from './percentTypeGreenScoreAndPoiEntity';
import { PoiModule } from '../poi/poi.module';
import { TypeGreenScore } from '../type-green-score/typeGreenScoreEntity';
import { TypeGreenScoreModule } from '../type-green-score/type-green-score.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PercentTypeGreenScoreAndPoi]),
  ],
  providers: [PercentTypeGreenScoreAndPoiService],
  controllers: [PercentTypeGreenScoreAndPoiController],
  exports: [PercentTypeGreenScoreAndPoiService],
})
export class PercentTypeGreenScoreAndPoiModule {}
