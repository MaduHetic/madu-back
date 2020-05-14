import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { PoiService } from './poi.service';
import { AuthGuard } from '@nestjs/passport';
import { PoiDto } from './poiDto';
import { PoiTransformationPipe } from './pipe/poi.transformation.pipe';
import { JoinTagPoiService } from '../join-tag-poi/join-tag-poi.service';
import { RoleGuard } from '../guard/role.guard';
import { Roles } from '../decorator/role.decorator';
import { EntityTypeInterceptor } from '../interceptor/entity-type.interceptor';
import { Poi } from './poiEntity';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiGoneResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { filterInt } from '../utils/function.utils';
// import { PercentTypeGreenScoreAndPoiService } from '../percent-type-green-score-and-poi/percent-type-green-score-and-poi.service';

/**
 * point of interest controller
 */
@ApiTags('poi')
@ApiBearerAuth()
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
  @ApiCreatedResponse()
  @ApiForbiddenResponse()
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
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @Get('one/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseGuards(RoleGuard)
  @Roles('user')
  async getCompanyAndTags(@Param('id', new ParseIntPipe()) idPoi: number) {
    return await this.poiService.getPoiAndTags(idPoi);
  }

  /**
   * Return all poi in database
   */
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @Get()
  @UseInterceptors(EntityTypeInterceptor)
  @UseGuards(RoleGuard)
  @Roles('user')
  async getAllPoi() {
    return await this.poiService.getAllPoi();
  }

  /**
   *
   * @param idPoi
   * @param poiDto
   */
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @Put(':id')
  @UseGuards(RoleGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  @Roles('admin')
  async updatePoi(@Param('id') idPoi: number, @Body() poiDto: PoiDto) {
    idPoi = filterInt(idPoi);
    return await this.poiService.updatePoi(poiDto, idPoi);
  }

  /**
   *
   */
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @UseGuards(RoleGuard)
  @Roles('admin')
  @Get('order/name')
  async getPoiByName(): Promise<Poi[]> {
    return await this.poiService.orderByName();
  }

  /**
   *
   */
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @UseGuards(RoleGuard)
  @Roles('admin')
  @Get('order/date')
  async getPoiOrderByDate(): Promise<Poi[]> {
    return await this.poiService.orderByDate();
  }

  /**
   *
   * @param idPoi
   */
  @Delete(':id')
  @ApiForbiddenResponse()
  @ApiNotFoundResponse()
  @ApiBearerAuth()
  @UseGuards(RoleGuard)
  @Roles('admin')
  @UsePipes(new ValidationPipe({ transform: true }))
  async deletePoi(@Param('id', new ParseIntPipe()) idPoi: number) {
    return await this.poiService.deletePoi(idPoi);
  }
}
