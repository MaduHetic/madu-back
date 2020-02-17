import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { TypeService } from './type.service';
import { AuthGuard } from '@nestjs/passport';
import { TypeDto } from './typeDto';
import { Type } from './typeEntity';
import { RoleGuard } from '../guard/role.guard';
import { Roles } from '../decorator/role.decorator';

/**
 * type controller
 */
@Controller('type')
@UseGuards(AuthGuard('jwt'))
export class TypeController {
  /**
   *
   * @param typeService
   */
  constructor(private readonly typeService: TypeService) {}

  /**
   *
   * @param typeDto
   */
  @UseGuards(RoleGuard)
  @Roles('admin')
  @Post()
  @UsePipes(new ValidationPipe())
  async addType(@Body() typeDto: TypeDto) {
    return await this.typeService.addType(typeDto);
  }

  /**
   *
   * @param idType
   */
  @UseGuards(RoleGuard)
  @Roles('admin')
  @Get('one/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getOneType(@Param('id', new ParseIntPipe()) idType: number): Promise<Type> {
    return await this.typeService.getOneType(idType);
  }

  /**
   *
   */
  @UseGuards(RoleGuard)
  @Roles('admin')
  @Get()
  async getTypes(): Promise<Type[]> {
    return await this.typeService.getAllType();
  }

  /**
   *
   * @param idType
   */
  @UseGuards(RoleGuard)
  @Roles('admin')
  @Delete(':id')
  @UsePipes(new ValidationPipe({transform: true}))
  async delteType(@Param('id', new ParseIntPipe()) idType: number) {
    await this.typeService.getOneType(idType);
    return await this.typeService.deleteType(idType);
  }
}
