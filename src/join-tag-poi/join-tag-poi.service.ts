import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Poi } from '../poi/poiEntity';
import { Tag } from '../tags/tagEntity';
import { JoinTagPoiEntity } from './joinTagPoiEntity';

@Injectable()
export class JoinTagPoiService {
  /**
   *
   * @param joinTagPoiRepository
   */
  constructor(
    @InjectRepository(JoinTagPoiEntity)
    private readonly joinTagPoiRepository: Repository<JoinTagPoiEntity>,
  ) {}

  /**
   *
   * @param poiToAdd
   * @param tagToAdd
   */
  async addJoinTagPoi(poiToAdd: Poi, tagToAdd: Tag) {
    const joinTagPoi = {
      poi: poiToAdd,
      tag: tagToAdd,
    };
    return await this.joinTagPoiRepository.save(joinTagPoi);
  }

  /**
   *
   */
  async getAllPoiAndTag(): Promise<JoinTagPoiEntity[]> {
    return await this.joinTagPoiRepository.find({
      relations: ['poi', 'tag'],
    });
  }

  /**
   *
   * @param tags
   */
  async serializeTagsData(tags: JoinTagPoiEntity[]) {
    return tags.map((tag) => {
      return tag.tag;
    });
  }

  /**
   *
   * @param poiToFind
   */
  async getTagsCompany(poiToFind: Poi) {
    return await this.joinTagPoiRepository.createQueryBuilder('g')
      .select()
      .innerJoinAndSelect('tag', 'tag.id = :idTag')
      .where('idPoi = :idPoi', { idPoi: poiToFind.id })
      .getRawMany();
  }

  /**
   *
   * @param poiToFind
   */
  async getAllCompanyTag(poiToFind: Poi): Promise<JoinTagPoiEntity[]> {
    return await this.joinTagPoiRepository.find({
      where: {
        poi: poiToFind,
      },
      relations: ['tag'],
    });
  }

  /**
   *
   * @param tagId
   */
  async countTags(tag: Tag): Promise<number> {
    return await this.joinTagPoiRepository.count({
      where: {
        tag,
      },
    });
  }

  async checkTag(tag: Tag, poi: Poi) {
    return await this.joinTagPoiRepository.findOne({
      where: {
        poi,
        tag,
      },
    });
  }

}
