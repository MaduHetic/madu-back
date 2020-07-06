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

  async getImgs(poi: Poi): Promise<ImgPoi[]> {
    return await this.imgPoiRepository.find({
      select: ['img'],
      where: {
        poi,
      },
    });
  }

  async serializeImgUrl(imgs) {
    return imgs.map((img) => {
      return img.img;
    });
  }

}
