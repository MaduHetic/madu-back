import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { PoiService } from './poi.service';
import { AuthGuard } from '@nestjs/passport';
import { PoiDto } from './poiDto';
import { PoiTransformationPipe } from './pipe/poi.transformation.pipe';
import { getConnection } from 'typeorm';
import { JoinTagPoiService } from '../join-tag-poi/join-tag-poi.service';
import { Tag } from '../tags/tagEntity';
import { JoinTagPoiEntity } from '../join-tag-poi/joinTagPoiEntity';

@Controller('poi')
@UseGuards(AuthGuard('jwt'))
export class PoiController {
  constructor(
    private readonly poiService: PoiService,
    private readonly joinTagPoiService: JoinTagPoiService,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UsePipes(PoiTransformationPipe)
  async addPoi(@Body() poiDto: PoiDto) {
    return await this.poiService.addPoi(poiDto);
  }

  @Get(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getCompanyAndTags(@Param('id', new ParseIntPipe()) idPoi: number) {
    const poi = await this.poiService.getPoi(idPoi);
    const tags: JoinTagPoiEntity[] =  await this.joinTagPoiService.getAllCompanyTag(poi);
    return  {
      poi: poi,
      tags: await this.joinTagPoiService.serializeTagsData(tags),
    };
  }
}
