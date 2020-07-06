import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ImgPoi } from './imgPoiEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { Poi } from '../poi/poiEntity';

@Injectable()
export class ImgPoiService {
  constructor(
    @InjectRepository(ImgPoi)
    private readonly imgPoiRepository: Repository<ImgPoi>,
  ) {}

  async addImgPoi(imgPoi, poi: Poi) {
    const poiAndImg = {
      img: imgPoi,
      poi,
    };
    return await this.imgPoiRepository.save(poiAndImg);
  }
}
