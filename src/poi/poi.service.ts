import { Injectable, NotFoundException } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { Poi } from './poiEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { TagsService } from '../tags/tags.service';
import { JoinTagPoiService } from '../join-tag-poi/join-tag-poi.service';
import { TypeService } from '../type/type.service';
import { PercentTypeGreenScoreAndPoiService } from '../percent-type-green-score-and-poi/percent-type-green-score-and-poi.service';
import { TypeGreenScoreService } from '../type-green-score/type-green-score.service';
import { PercentAndIdTag } from './percentAndIdTag';
import { PercentTypeGreenScoreAndPoi } from '../percent-type-green-score-and-poi/percentTypeGreenScoreAndPoiEntity';
import { exaToRgbaObject, getEnumKey } from '../utils/function.utils';
import { TypePoiEnum } from './enum/typePoiEnum';
import { ancestorWhere } from 'tslint';
import { ImgPoiService } from '../img-poi/img-poi.service';
import { PoiGeoCalcService } from './poi.geo.calc.service';

@Injectable()
export class PoiService {
  /**
   *
   * @param poiRepository
   * @param connection
   * @param tagsService
   * @param typeService
   * @param typeGreenScoreService
   * @param joinTagPoiService
   * @param percentTypeGreenScoreAndPoiService
   * @param imgPoiService
   */
  constructor(
    @InjectRepository(Poi)
    private readonly poiRepository: Repository<Poi>,
    private connection: Connection,
    private tagsService: TagsService,
    private typeService: TypeService,
    private typeGreenScoreService: TypeGreenScoreService,
    private joinTagPoiService: JoinTagPoiService,
    private percentTypeGreenScoreAndPoiService: PercentTypeGreenScoreAndPoiService,
    private imgPoiService: ImgPoiService,
  ) {}

  async formatToPercentTGCAndPoi(poi: Poi, typeAndPercent: PercentAndIdTag[]): Promise<PercentTypeGreenScoreAndPoi[]> {
      const percentPoiAnTypeGcPromise =  typeAndPercent.map(async (typePercent) => {
        return {
          poi,
          percent: typePercent.percent,
          typeGreenScore: await this.typeGreenScoreService.getType(typePercent.idType),
        };
      });
      return await Promise.all(percentPoiAnTypeGcPromise);
  }

  // Todo refacto
  async addPoi(poiDto) {
    const tags = await this.tagsService.getTags(poiDto.tags);
    if (poiDto.typeGreenScore) {
      const typeToCheck = await this.typeGreenScoreService.getByIds(
        poiDto.typeGreenScore.map((type) => {
          return type.idType;
        }));
      if (typeToCheck.length < poiDto.typeGreenScore.length) {
        throw new NotFoundException('type green score not found');
      }
    }
    if (tags.length < poiDto.tags.length) {
      throw new NotFoundException('tag(s) not found(s)');
    }
    const poiAdded =  await this.poiRepository.save(poiDto);
    const tagAddedPromise = tags.map(async (tag) => {
      return await this.joinTagPoiService.addJoinTagPoi(poiAdded, tag);
    });
    if (poiDto.typeGreenScore) {
      const percentTypeGreenScoreAndPoiToAdd = await this.formatToPercentTGCAndPoi(poiAdded, poiDto.typeGreenScore);
      const percentTypeGcAndPoiAddedPromise = percentTypeGreenScoreAndPoiToAdd.map(async (percentGcAndDto) => {
        return await this.percentTypeGreenScoreAndPoiService.addPercentTypeGcAndPoi(percentGcAndDto);
      });
      await Promise.all(percentTypeGcAndPoiAddedPromise);
    }
    await Promise.all(tagAddedPromise);
    if (poiDto.imgsPoi) {
      await Promise.all(poiDto.imgsPoi.map( async (img) => {
        return await this.imgPoiService.addImgPoi(img, poiAdded);
      }));
    }
    return poiAdded;
  }

  async getPoi(idPoi: number): Promise<Poi> {
    const poi =  await this.poiRepository.findOneOrFail(idPoi)
      .catch(() => {
        throw new NotFoundException(`Poi with id ${idPoi} Not Found`);
      });
    poi.greenScore = await this.percentTypeGreenScoreAndPoiService.getGreenScorePassMark(poi);
    return  poi;
  }

  async getUserPoi(idPoi: number, user) {
    const poi: any = await this.getPoi(idPoi);
    // poi.distance =  this.poiGeoCalcService.calcDist(poi)
  }

  async getPoiAndTags(idPoi: number) {
    const poi = await this.getPoi(idPoi);
    const tags = await this.joinTagPoiService.getAllCompanyTag(poi);
    poi.greenScore = await this.percentTypeGreenScoreAndPoiService.getGreenScorePassMark(poi);
    const serializeTags = await this.joinTagPoiService.serializeTagsData(tags);
    serializeTags.forEach((tag) => {
      exaToRgbaObject(tag.colorTag, tag);
    });
    return {
      poi,
      tags:  serializeTags, // serializeTagsWithRgb,
      typeGreenScore: await this.percentTypeGreenScoreAndPoiService.serialazeData(await this.percentTypeGreenScoreAndPoiService.getType(poi)),
    };
  }

  async getAllPoi(): Promise<Poi[]> {
    const allPoi = await this.poiRepository.find();
    const allPoiWithTagsAndTypesPromise = allPoi.map(async (poi) =>  {
      const poiWithType: any = poi;
      const tags = await this.joinTagPoiService.getAllCompanyTag(poi);
      poiWithType.tags = await this.joinTagPoiService.serializeTagsData(tags);
      poiWithType.greenScore = await this.percentTypeGreenScoreAndPoiService.getGreenScorePassMark(poi);
      poiWithType.typeGreenScore = await this.percentTypeGreenScoreAndPoiService.serialazeData(await this.percentTypeGreenScoreAndPoiService.getType(poi));
      return poiWithType;
    });
    return  await Promise.all(allPoiWithTagsAndTypesPromise);
  }
/*
  async getPoiForUserr(user) {
    const allPoi = await this.poiRepository.find();
    const allPoiWithTagsAndTypesPromise = allPoi.map(async (poi) =>  {
      const poiWithType: any = poi;
      const tags = await this.joinTagPoiService.getAllCompanyTag(poi);
      poiWithType.tags = await this.joinTagPoiService.serializeTagsData(tags);
      poiWithType.greenScore = await this.percentTypeGreenScoreAndPoiService.getGreenScorePassMark(poi);
      poiWithType.typeGreenScore = await this.percentTypeGreenScoreAndPoiService.serialazeData(await this.percentTypeGreenScoreAndPoiService.getType(poi));
      const imgs = await this.imgPoiService.getImgs(poi);
      poiWithType.imgs = imgs.map((img) => {
        return img.img;
      });
      poiWithType.distance = await this.poiGeoCalcService.getDitancePoi(user, poi);
      return poiWithType;
    });
    return  await Promise.all(allPoiWithTagsAndTypesPromise);
  }
*/
  async countPoi() {
    return await this.poiRepository.count();
  }

  async orderByName(): Promise<Poi[]> {
    return await this.poiRepository.find({
      order: {
        name: 'ASC',
      },
    });
  }

  async orderByDate(): Promise<Poi[]> {
    return await this.poiRepository.find({
      order: {
        dateCreate: 'ASC',
      },
    });
  }

  async countType(type: string): Promise<number> {
    return await this.poiRepository.count({
      where: {
        type,
      },
    });
  }

  async updatePoi(poiDto, idPoi) {
    const poi = await this.getPoi(idPoi);
    const tagAddPromise = poiDto.tags.map(async (tagId) => {
      const tag =  await this.tagsService.getOneTag(tagId);
      const checkIfTagJoin = await this.joinTagPoiService.checkTag(tag, poi);
      if (!checkIfTagJoin) {
        await this.joinTagPoiService.addJoinTagPoi(poi, tag);
      }
    });
    poiDto.idPoi = idPoi;
    await Promise.all(tagAddPromise);
    poi.address = poiDto.address;
    poi.city = poiDto.city;
    poi.description = poiDto.description;
    poi.name = poiDto.name;
    poi.postalCode = poiDto.postalCode;
    poi.price = poiDto.price;
    poi.type = poiDto.type;
    poi.lat = poiDto.lat;
    poi.long = poiDto.long;
    return await this.poiRepository.save(poi);
  }

  async getTypePoi() {
    return await getEnumKey(TypePoiEnum);
  }

  async deletePoi(idPoi: number) {
    const poi = await this.getPoi(idPoi);
    return await this.poiRepository.delete(idPoi);
  }
}
