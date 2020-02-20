import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './tagEntity';
import { Repository } from 'typeorm';
import { exaToRgbaObject, generateRandExaDecimalColor } from '../utils/function.utils';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  async addTag(tagDto) {
    tagDto.colorTag = generateRandExaDecimalColor();
    return await this.tagRepository.save(tagDto);
  }

  async deleteTag(idTag: number) {
    return await this.tagRepository.delete(idTag);
  }

  async getAllTag(): Promise<Tag[]> {
    const tags =  await this.tagRepository.find();
    tags.forEach((tag) => {
      exaToRgbaObject(tag.colorTag, tag);
    });
    return tags;
  }

  async getOneTag(idTag: number): Promise<Tag> {
    return await this.tagRepository.findOneOrFail(idTag)
      .catch(() => {
        throw new NotFoundException(`Tag with id ${idTag} not found`);
      });
  }

  async getTags(idsTags: number[]) {
    return await this.tagRepository.findByIds(idsTags);
  }

  async getTagsName() {
    const tags = await this.getAllTag();
    return tags.map((tag) => {
      return tag.tag;
    });
  }
}
