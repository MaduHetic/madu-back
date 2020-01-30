import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './tagEntity';
import { Repository } from 'typeorm';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  async addTag(tagDto) {
    return await this.tagRepository.save(tagDto);
  }

  async deleteTag(idTag: number) {
    return await this.tagRepository.delete(idTag);
  }

  async getAllTag(): Promise<Tag[]> {
    return await this.tagRepository.find();
  }

  async getOneTag(idTag: number): Promise<Tag> {
    return await this.tagRepository.findOneOrFail(idTag)
      .catch(() => {
        throw new NotFoundException(`Tag with id ${idTag} not found`);
      });
  }
}
