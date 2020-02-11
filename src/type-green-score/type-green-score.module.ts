import { Module } from '@nestjs/common';
import { TypeGreenScoreService } from './type-green-score.service';
import { TypeGreenScoreController } from './type-green-score.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeGreenScore } from './typeGreenScoreEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TypeGreenScore]),
  ],
  providers: [TypeGreenScoreService],
  controllers: [TypeGreenScoreController],
  exports: [TypeGreenScoreService],
})
export class TypeGreenScoreModule {}
