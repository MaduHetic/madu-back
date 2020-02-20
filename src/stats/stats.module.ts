import { Module } from '@nestjs/common';
import { StatsService } from './stats.service';
import { StatsController } from './stats.controller';
import { JoinTagPoiModule } from '../join-tag-poi/join-tag-poi.module';
import { PoiModule } from '../poi/poi.module';
import { CompanyModule } from '../company/company.module';
import { TypeModule } from '../type/type.module';
import { TagsModule } from '../tags/tags.module';
import { PercentTypeGreenScoreAndPoiModule } from '../percent-type-green-score-and-poi/percent-type-green-score-and-poi.module';

@Module({
  imports: [JoinTagPoiModule, PoiModule, CompanyModule, TypeModule, TagsModule, PercentTypeGreenScoreAndPoiModule],
  providers: [StatsService],
  controllers: [StatsController],
})
export class StatsModule {}
