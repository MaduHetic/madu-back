import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Poi } from '../poi/poiEntity';
import { Tag } from '../tags/tagEntity';
import { JoinTagPoiEntity } from './joinTagPoiEntity';

@Injectable()
export class JoinTagPoiService {
  constructor(
    @InjectRepository(JoinTagPoiEntity)
    private readonly joinTagPoiRepository: Repository<JoinTagPoiEntity>,
  ) {}

  async addJoinTagPoi(poiToAdd: Poi, tagToAdd: Tag) {
    const joinTagPoi = {
      poi: poiToAdd,
      tag: tagToAdd,
    };
    return await this.joinTagPoiRepository.save(joinTagPoi);
  }

  async getAllPoiAndTag(): Promise<JoinTagPoiEntity[]> {
    return await this.joinTagPoiRepository.find({
      relations: ['poi', 'tag'],
    });
  }

  async serializeTagsData(tags: JoinTagPoiEntity[]) {
    return tags.map((tag) => {
      return tag.tag;
    });
  }

  async getTagsCompany(poiToFind: Poi) {
    return await this.joinTagPoiRepository.createQueryBuilder('g')
      .select()
      .innerJoinAndSelect('tag', 'tag.id = :idTag')
      .where('idPoi = :idPoi', { idPoi: poiToFind.id })
      .getRawMany();
  }

  async getAllCompanyTag(poiToFind: Poi): Promise<JoinTagPoiEntity[]> {
    return await this.joinTagPoiRepository.find({
      where: {
        poi: poiToFind,
      },
      relations: ['tag'],
    });
  }
}
