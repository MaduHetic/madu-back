import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PercentTypeGreenScoreAndPoiService } from './percent-type-green-score-and-poi.service';
import { PercentTypeGreenScoreAndPoiDto } from './PercentTypeGreenScoreAndPoiDto';
import { RoleGuard } from '../guard/role.guard';
import { Roles } from '../decorator/role.decorator';
import { PercentTypeGreenScoreAndPoi } from './percentTypeGreenScoreAndPoiEntity';
import { PercentTypeGreenScoreAndPoiTransformationPipe } from './Pipe/percent-type-green-score-and-poi.transformation.pipe';
import { Role } from '../role/roleEntity';

/**
 * Percent green score controller // todo doc
 */
@Controller('percent-type-green-score-and-poi')
@UseGuards(AuthGuard('jwt'))
export class PercentTypeGreenScoreAndPoiController {
  //
  //
  // /**
  //  * todo doc
  //  * @param percentTypeGreenScoreAndPoiService
  //  */
  // constructor(readonly percentTypeGreenScoreAndPoiService: PercentTypeGreenScoreAndPoiService) {}
  //
  // /**
  //  *  todo doc
  //  * @param percentTypeGreenScoreAndPoiDto
  //  */
  // @UseGuards(RoleGuard)
  // @Roles('admin')
  // @Post()
  // @UsePipes(new ValidationPipe({ transform: true }))
  // @UsePipes(PercentTypeGreenScoreAndPoiTransformationPipe)
  // async addNewPercentTypeGCAndPoi(@Body() percentTypeGreenScoreAndPoiDto: PercentTypeGreenScoreAndPoiDto) {
  //   return await this.percentTypeGreenScoreAndPoiService.addPercentTypeGreenScoreAndPoiService(percentTypeGreenScoreAndPoiDto);
  // }
  //
  // @UseGuards(RoleGuard)
  // @Roles('admin')
  // @Post('and-type')
  // async addManyPercentTypeDcAndNewType(@Body() dataPercentAndTypeGc) {
  //   return 'many';
  // }
  //
  // @UseGuards(RoleGuard)
  // @Roles('admin')
  // @Get()
  // async getAllPercentTypeAndPoi(): Promise<PercentTypeGreenScoreAndPoi[]> {
  //   return await this.percentTypeGreenScoreAndPoiService.getAllPercentTypeGreenScoreAndPoi();
  // }
  //
  // @UseGuards(RoleGuard)
  // @Roles('admin')
  // @UsePipes(new ValidationPipe({ transform: true }))
  // @Get('one/:id')
  // async getOnePercentTypeAndPoi(@Param('id', new ParseIntPipe()) idPercent: number): Promise<PercentTypeGreenScoreAndPoi> {
  //   return await this.percentTypeGreenScoreAndPoiService.getOnePercentTypeGreenScoreAndPoi(idPercent);
  // }
  //
  // /*
  // @Get('percent/:id')
  // @UseGuards(RoleGuard)
  // @Roles('admin')
  // @UsePipes(new ValidationPipe({ transform: true }))
  // async getPercentOfPoi(@Param('id', new ParseIntPipe()) idPoi: number): Promise<PercentTypeGreenScoreAndPoi[]> {
  //   return await this.percentTypeGreenScoreAndPoiService.findByPoi(idPoi);
  // }
  // */
  //
  // @UseGuards(RoleGuard)
  // @Roles('admin')
  // @UsePipes(new ValidationPipe({ transform: true }))
  // @Delete(':id')
  // async deletePercentGcAndPoi(@Param('id', new ParseIntPipe()) idPercent: number) {
  //   return await this.percentTypeGreenScoreAndPoiService.deletePercentTypeGreenScore(idPercent);
  // }
}
