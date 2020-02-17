import { Module } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from './typeEntity';
import { TypeController } from './type.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Type]),
  ],
  providers: [TypeService],
  controllers: [TypeController],
  exports: [TypeService],
})
export class TypeModule {}
