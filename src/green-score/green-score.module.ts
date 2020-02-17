import { Module } from '@nestjs/common';
import { GreenScoreService } from './green-score.service';
import { GreenScoreController } from './green-score.controller';

@Module({
  providers: [GreenScoreService],
  controllers: [GreenScoreController]
})
export class GreenScoreModule {}
