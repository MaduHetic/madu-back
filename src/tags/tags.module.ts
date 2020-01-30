import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './tagEntity';
import { TagsController } from './tags.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tag]),
  ],
  providers: [TagsService],
  controllers: [TagsController],
})
export class TagsModule {}
