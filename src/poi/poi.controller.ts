import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { PoiService } from './poi.service';
import { AuthGuard } from '@nestjs/passport';
import { PoiDto } from './poiDto';
import { PoiTransformationPipe } from './pipe/poi.transformation.pipe';
import { getConnection } from 'typeorm';
import { JoinTagPoiService } from '../join-tag-poi/join-tag-poi.service';
import { Tag } from '../tags/tagEntity';
import { JoinTagPoiEntity } from '../join-tag-poi/joinTagPoiEntity';
import { RoleGuard } from '../guard/role.guard';
import { Roles } from '../decorator/role.decorator';
import { Poi } from './poiEntity';
import { JoinTypePoiService } from '../join-type-poi/join-type-poi.service';

/**
 * point of interest controller
 */
@Controller('poi')
@UseGuards(AuthGuard('jwt'))
export class PoiController {
  constructor(
    private readonly poiService: PoiService,
    private readonly joinTagPoiService: JoinTagPoiService,
    private readonly joinTypePoi: JoinTypePoiService,
  ) {}

  /**
   *
   * @param poiDto
   */
  @Post()
  @UsePipes(new ValidationPipe())
  @UsePipes(PoiTransformationPipe)
  @UseGuards(RoleGuard)
  @Roles('admin')
  async addPoi(@Body() poiDto: PoiDto) {
    return await this.poiService.addPoi(poiDto);
  }

  /**
   *
   * @param idPoi
   */
  @Get(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseGuards(RoleGuard)
  @Roles('admin')
  async getCompanyAndTags(@Param('id', new ParseIntPipe()) idPoi: number) {
    const poi = await this.poiService.getPoi(idPoi);
    const tags: JoinTagPoiEntity[] =  await this.joinTagPoiService.getAllCompanyTag(poi);
    return  {
      poi,
      tags: await this.joinTagPoiService.serializeTagsData(tags),
      type: await this.joinTypePoi.getTypeOfPoi(poi),
    };
  }

  @Get()
  @UseGuards(RoleGuard)
  @Roles('admin')
  async getAllPoi() {
    return await this.poiService.getAllPoi();
  }
}
