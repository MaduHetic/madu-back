import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JoinTypePoi } from './joinTypePoi';
import { Repository } from 'typeorm';
import { Poi } from '../poi/poiEntity';
import { Type } from '../type/typeEntity';

@Injectable()
export class JoinTypePoiService {
  constructor(
    @InjectRepository(JoinTypePoi)
    private readonly joinTypePoiRepository: Repository<JoinTypePoi>,
  ) {}

  async addJoinTypePoi(poiToAdd: Poi, typeToAdd: Type) {
    const typePoi = {
      type: typeToAdd,
      poi: poiToAdd,
    };
    return await this.joinTypePoiRepository.save(typePoi);
  }

  async getAllPoiWithType(): Promise<JoinTypePoi[]> {
    return await this.joinTypePoiRepository.find({
      relations: ['type', 'poi'],
    });
  }

  async getPoiWithTag(poiToFind: Poi): Promise<JoinTypePoi> {
    return await this.joinTypePoiRepository.findOneOrFail({
      where: {
        poi: poiToFind,
      },
      relations: ['poi', 'tag'],
    });
  }

  async getTypeOfPoi(poi: Poi) {
    return await this.joinTypePoiRepository.find({
      where: {
        poi,
      },
    });
  }
}
