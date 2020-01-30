import { Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TagsDto } from './tagsDto';
import { TagsService } from './tags.service';
import { Tag } from './tagEntity';

@Controller('tags')
@UseGuards(AuthGuard('jwt'))
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async addTag(tagDto: TagsDto) {
    return await this.tagsService.addTag(tagDto);
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe({ transform: true}))
  async deleteTag(@Param('id', new ParseIntPipe()) idTag: number) {
    await this.tagsService.getOneTag(idTag);
    return await this.tagsService.deleteTag(idTag);
  }

  @Get('one/:id')
  @UsePipes(new ValidationPipe({transform: true}))
  async getOneTag(@Param('id', new ParseIntPipe()) idTag: number): Promise<Tag> {
    return await this.tagsService.getOneTag(idTag);
  }

  @Get()
  async getAllTag(): Promise<Tag[]> {
    return await this.tagsService.getAllTag();
  }
}
