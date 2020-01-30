import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { TypeService } from './type.service';
import { AuthGuard } from '@nestjs/passport';
import { TypeDto } from './typeDto';
import { Type } from './typeEntity';

@Controller('type')
@UseGuards(AuthGuard('jwt'))
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async addType(@Body() typeDto: TypeDto) {
    return await this.typeService.addType(typeDto);
  }

  @Get('one/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getOneType(@Param('id', new ParseIntPipe()) idType: number): Promise<Type> {
    return await this.typeService.getOneType(idType);
  }

  @Get()
  async getTypes(): Promise<Type[]> {
    return await this.typeService.getAllType();
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe({transform: true}))
  async delteType(@Param('id', new ParseIntPipe()) idType: number) {
    await this.typeService.getOneType(idType);
    return await this.typeService.deleteType(idType);
  }

}
