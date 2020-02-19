import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PercentTypeGreenScoreAndPoi } from './percentTypeGreenScoreAndPoiEntity';
import { Repository } from 'typeorm';
import { PoiService } from '../poi/poi.service';
import { TypeGreenScoreService } from '../type-green-score/type-green-score.service';
import { PercentTypeGreenScoreAndPoiDto } from './PercentTypeGreenScoreAndPoiDto';
import { Poi } from '../poi/poiEntity';

@Injectable()
export class PercentTypeGreenScoreAndPoiService {
  constructor(
    @InjectRepository(PercentTypeGreenScoreAndPoi)
    private readonly percentTypeGreenScoreAndPoiRepository: Repository<PercentTypeGreenScoreAndPoi>,
  ) {}

  async addPercentTypeGcAndPoi(percentTypeGcAndPoi: PercentTypeGreenScoreAndPoi) {
    return await this.percentTypeGreenScoreAndPoiRepository.save(percentTypeGcAndPoi);
  }
  //
  // async addPercentTypeGreenScoreAndPoiService(
  //   percentTypeGreenScoreAndPoiServiceDto: PercentTypeGreenScoreAndPoiDto) {
  //   const typeGreenScoreFind = await this.typeGreenScoreService.getType(percentTypeGreenScoreAndPoiServiceDto.idTypeGreenScore);
  //   const poiFind = await this.poiService.getPoi(percentTypeGreenScoreAndPoiServiceDto.idPoi);
  //   const percentTypeGreenScoreAndPoi: PercentTypeGreenScoreAndPoi = {
  //     percent: percentTypeGreenScoreAndPoiServiceDto.percent,
  //     poi: poiFind,
  //     typeGreenScore: typeGreenScoreFind,
  //   };
  //   return await this.percentTypeGreenScoreAndPoiRepository.save(percentTypeGreenScoreAndPoi);
  // }
  //
  // async getAllPercentTypeGreenScoreAndPoi(): Promise<PercentTypeGreenScoreAndPoi[]> {
  //   return await this.percentTypeGreenScoreAndPoiRepository.find({
  //     relations: ['poi', 'typeGreenScore'],
  //   });
  // }
  //
  // async findByPoi(idPoi: number): Promise<PercentTypeGreenScoreAndPoi[]> {
  //   const poi = await this.poiService.getPoi(idPoi);
  //   return await this.percentTypeGreenScoreAndPoiRepository.find({
  //     where: {
  //       poi,
  //     },
  //   });
  // }
  //
  // async getOnePercentTypeGreenScoreAndPoi(idPercent: number): Promise<PercentTypeGreenScoreAndPoi> {
  //   return await this.percentTypeGreenScoreAndPoiRepository.findOneOrFail(idPercent)
  //     .catch(() => {
  //       throw new NotFoundException(`PercentTypeGreenScoreAndPoi with id ${idPercent} Not Found`);
  //     });
  // }
  //
  // async deletePercentTypeGreenScore(idPercentGcAndPoi: number) {
  //   const percentGc = await this.getOnePercentTypeGreenScoreAndPoi(idPercentGcAndPoi);
  //   return await this.percentTypeGreenScoreAndPoiRepository.delete(percentGc);
  // }
  //
  async getGreenScorePassMark(poi: Poi): Promise<number> {
    const allPercent = await this.percentTypeGreenScoreAndPoiRepository.find({
      where: {
        poi,
      },
    });
    if (allPercent.length === 0) {
      return 0;
    }
    let total: number = 0;
    allPercent.forEach((percent) => {
      total +=  percent.percent;
    });
    return total / allPercent.length;
  }
}
