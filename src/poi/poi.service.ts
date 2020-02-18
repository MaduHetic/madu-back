import { Injectable, NotFoundException } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { Poi } from './poiEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { TagsService } from '../tags/tags.service';
import { JoinTagPoiService } from '../join-tag-poi/join-tag-poi.service';
import { TypeService } from '../type/type.service';
import { JoinTypePoiService } from '../join-type-poi/join-type-poi.service';

@Injectable()
export class PoiService {
  constructor(
    @InjectRepository(Poi)
    private readonly poiRepository: Repository<Poi>,
    private connection: Connection,
    private tagsService: TagsService,
    private typeService: TypeService,
    private joinTypePoiService: JoinTypePoiService,
    private joinTagPoiService: JoinTagPoiService,
    // private percentTypeGreenScoreAndPoiService: PercentTypeGreenScoreAndPoiService,
  ) {}

  async addPoi(poiDto) {
    const tags = await this.tagsService.getTags(poiDto.tags);
    if (tags.length < poiDto.tags.length) {
      throw new NotFoundException('tag(s) not found(s)');
    }
    const poiAdded =  await this.poiRepository.save(poiDto);
    const tagAddedPromise = tags.map(async (tag) => {
      return await this.joinTagPoiService.addJoinTagPoi(poiAdded, tag);
    });
    await Promise.all(tagAddedPromise);
    return poiAdded;
  }

  async getPoi(idPoi: number): Promise<Poi> {
    return await this.poiRepository.findOneOrFail(idPoi)
      .catch(() => {
        throw new NotFoundException(`Poi with id ${idPoi} Not Found`);
      });
  }

  async getAllPoi() {
    const allPoi = await this.poiRepository.find();
    const allPoiWithTagsAndTypesPromise = allPoi.map(async (poi) =>  {
      const poiWithType: any = poi;
      const tags = await this.joinTagPoiService.getAllCompanyTag(poi);
      poiWithType.tags = await this.joinTagPoiService.serializeTagsData(tags);
      return poiWithType;
    });
    return  await Promise.all(allPoiWithTagsAndTypesPromise);
  }
}
