import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PercentTypeGreenScoreAndPoi } from './percentTypeGreenScoreAndPoiEntity';
import { Repository } from 'typeorm';
import { PoiService } from '../poi/poi.service';
import { TypeGreenScoreService } from '../type-green-score/type-green-score.service';
import { PercentTypeGreenScoreAndPoiDto } from './PercentTypeGreenScoreAndPoiDto';

@Injectable()
export class PercentTypeGreenScoreAndPoiService {
  constructor(
    @InjectRepository(PercentTypeGreenScoreAndPoi)
    private readonly percentTypeGreenScoreAndPoiRepository: Repository<PercentTypeGreenScoreAndPoi>,
    private readonly poiService: PoiService,
    private readonly typeGreenScoreService: TypeGreenScoreService,
  ) {}

  async addPercentTypeGreenScoreAndPoiService(
    percentTypeGreenScoreAndPoiServiceDto: PercentTypeGreenScoreAndPoiDto) {
    const typeGreenScoreFind = await this.typeGreenScoreService.getType(percentTypeGreenScoreAndPoiServiceDto.idTypeGreenScore);
    const poiFind = await this.poiService.getPoi(percentTypeGreenScoreAndPoiServiceDto.idPoi);
    const percentTypeGreenScoreAndPoi = {
      percent: percentTypeGreenScoreAndPoiServiceDto.percent,
      poi: poiFind,
      typeGreenScore: typeGreenScoreFind,
    };
    return await this.percentTypeGreenScoreAndPoiRepository.save(percentTypeGreenScoreAndPoi);
  }

  async getAllPercentTypeGreenScoreAndPoi(): Promise<PercentTypeGreenScoreAndPoi[]> {
    return await this.percentTypeGreenScoreAndPoiRepository.find();
  }

  async getOnePercentTypeGreenScoreAndPoi(idPercent: number): Promise<PercentTypeGreenScoreAndPoi> {
    return await this.percentTypeGreenScoreAndPoiRepository.findOneOrFail(idPercent)
      .catch(() => {
        throw new NotFoundException(`PercentTypeGreenScoreAndPoi with id ${idPercent} Not Found`);
      })
  }
}
