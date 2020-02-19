import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { PoiService } from './poi.service';
import { AuthGuard } from '@nestjs/passport';
import { PoiDto } from './poiDto';
import { PoiTransformationPipe } from './pipe/poi.transformation.pipe';
import { JoinTagPoiService } from '../join-tag-poi/join-tag-poi.service';
import { RoleGuard } from '../guard/role.guard';
import { Roles } from '../decorator/role.decorator';
// import { PercentTypeGreenScoreAndPoiService } from '../percent-type-green-score-and-poi/percent-type-green-score-and-poi.service';

/**
 * point of interest controller
 */
@Controller('poi')
@UseGuards(AuthGuard('jwt'))
export class PoiController {
  constructor(
    private readonly poiService: PoiService,
    private readonly joinTagPoiService: JoinTagPoiService,
    // private readonly percentTypeGreenScoreAndPoiService: PercentTypeGreenScoreAndPoiService,
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
  @Get('one/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseGuards(RoleGuard)
  @Roles('admin')
  async getCompanyAndTags(@Param('id', new ParseIntPipe()) idPoi: number) {
    return await this.poiService.getPoiAndTags(idPoi);
  }

  /**
   * Return all poi in database
   */
  @Get()
  @UseGuards(RoleGuard)
  @Roles('admin')
  async getAllPoi() {
    return await this.poiService.getAllPoi();
  }

  /**
   *
   * @param idPoi
   */
  @Put(':id')
  @UseGuards(RoleGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  @Roles('admin')
  async updatePoi(@Param('id', new ParseIntPipe()) idPoi: number) {
    return 'updatePoi';
  }

}
