import { Injectable, NotFoundException } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { Poi } from './poiEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { TagsService } from '../tags/tags.service';
import { JoinTagPoiService } from '../join-tag-poi/join-tag-poi.service';
import { JoinTypePoi } from '../join-type-poi/joinTypePoi';
import { JoinTagPoiEntity } from '../join-tag-poi/joinTagPoiEntity';

@Injectable()
export class PoiService {
  constructor(
    @InjectRepository(Poi)
    private readonly poiRepository: Repository<Poi>,
    private connection: Connection,
    private tagsService: TagsService,
    private joinTagPoiService: JoinTagPoiService,
  ) {}

  async addPoi(poiDto) {
    const tags = await this.tagsService.getTags(poiDto.tags);
    if (tags.length < poiDto.tags.length) {
      throw new NotFoundException('tag(s) not found(s)');
    }
    const poiAdded =  await this.poiRepository.save(poiDto);
    const tagAddesPromise = tags.map(async (tag) => {
      return await this.joinTagPoiService.addJoinTagPoi(poiAdded, tag);
    });
    await Promise.all(tagAddesPromise);
    return poiAdded;
  }

  async getPoi(idPoi: number): Promise<Poi> {
    return await this.poiRepository.findOneOrFail(idPoi)
      .catch(() => {
        throw new NotFoundException(`Poi with id ${idPoi} Not Found`);
      });
  }

  async getAllPoi(): Promise<JoinTagPoiEntity[]> {
    return await this.joinTagPoiService.getAllPoiAndTag();
  }
}
