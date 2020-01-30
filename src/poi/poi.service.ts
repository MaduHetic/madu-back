import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Poi } from './poiEntity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PoiService {
  constructor(
    @InjectRepository(Poi)
    private readonly poiRepository: Repository<Poi>,
  ) {}

  async addPoi(poiDto) {
    return await this.poiRepository.save(poiDto);
  }
}
