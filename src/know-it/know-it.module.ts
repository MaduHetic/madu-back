import { Module } from '@nestjs/common';
import { KnowItService } from './know-it.service';
import { KnowItController } from './know-it.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KnowIt } from './knowItEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([KnowIt]),
  ],
  providers: [KnowItService],
  controllers: [KnowItController],
  exports: [KnowItService],
})
export class KnowItModule {}
