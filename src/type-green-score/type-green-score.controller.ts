import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { TypeGreenScoreService } from './type-green-score.service';
import { RoleGuard } from '../guard/role.guard';
import { Role } from '../role/roleEntity';
import { TypeGreenScoreDto } from './typeGreenScoreDto';
import { TypeGreenScore } from './typeGreenScoreEntity';
import { Roles } from '../decorator/role.decorator';

/**
 * Type green score controller
 */
@Controller('type-green-score')
export class TypeGreenScoreController {
  /**
   *
   * @param typeGreenScoreService
   */
  constructor(readonly typeGreenScoreService: TypeGreenScoreService) {}

  /**
   *
   * @param typeGreenScoreAndPoiDto
   */
  @UseGuards(RoleGuard)
  @Roles('admin')
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async addTypeGreenScore(@Body() typeGreenScoreAndPoiDto: TypeGreenScoreDto) {
    return await this.typeGreenScoreService.addGreenScore(typeGreenScoreAndPoiDto);
  }

  /**
   *
   * @param idTypeGreenScore
   */
  @UseGuards(RoleGuard)
  @Roles('admin')
  @Get('/one/:id')
  async getOneTypeGreenScore(@Param('id', new ParseIntPipe()) idTypeGreenScore: number): Promise<TypeGreenScore> {
    return await this.typeGreenScoreService.getType(idTypeGreenScore);
  }

  /**
   *
   */
  @UseGuards(RoleGuard)
  @Roles('admin')
  @Get()
  async getAllTypeGreenScore(): Promise<TypeGreenScore[]> {
    return await this.typeGreenScoreService.getAllType();
  }

  /**
   *
   * @param idTypeGreenScore
   */
  @UseGuards(RoleGuard)
  @Roles('admin')
  @Delete(':id')
  async deleteTypeGreenScore(@Param('id', new ParseIntPipe()) idTypeGreenScore: number) {
    return await this.typeGreenScoreService.deleteTypeGreenScore(idTypeGreenScore);
  }
}
