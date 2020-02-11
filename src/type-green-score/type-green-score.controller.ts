import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { TypeGreenScoreService } from './type-green-score.service';
import { RoleGuard } from '../guard/role.guard';
import { Role } from '../role/roleEntity';
import { TypeGreenScoreDto } from './typeGreenScoreDto';
import { TypeGreenScore } from './typeGreenScoreEntity';

@Controller('type-green-score')
export class TypeGreenScoreController {
  constructor(readonly typeGreenScoreService: TypeGreenScoreService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async addTypeGreenScore(@Body() typeGreenScoreAndPoiDto: TypeGreenScoreDto) {
    return await this.typeGreenScoreService.addGreenScore(typeGreenScoreAndPoiDto);
  }

  @Get('/one/:id')
  async getOneTypeGreenScore(@Param('id', new ParseIntPipe()) idTypeGreenScore: number): Promise<TypeGreenScore> {
    return await this.typeGreenScoreService.getType(idTypeGreenScore);
  }

  @Get()
  async getAllTypeGreenScore(): Promise<TypeGreenScore[]> {
    return await this.typeGreenScoreService.getAllType();
  }

  @Delete(':id')
  async deleteTypeGreenScore(@Param('id', new ParseIntPipe()) idTypeGreenScore: number) {
    return await this.typeGreenScoreService.deleteTypeGreenScore(idTypeGreenScore);
  }
}
