import { Module } from '@nestjs/common';
import { TypeGreenScoreService } from './type-green-score.service';

@Module({
  providers: [TypeGreenScoreService]
})
export class TypeGreenScoreModule {}
