import { Module } from '@nestjs/common';
import { JoinTypePoiService } from './join-type-poi.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JoinTypePoi } from './joinTypePoi';

@Module({
  imports: [
    TypeOrmModule.forFeature([JoinTypePoi]),
  ],
  providers: [JoinTypePoiService],
  exports: [JoinTypePoiService],
})
export class JoinTypePoiModule {}
