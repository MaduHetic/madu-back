import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { JoinUserPoi } from './joinUserPoiEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { JoinUserPoiInterface } from './join-user-poi.interface';

@Injectable()
export class JoinUserPoiService {
  constructor(
    @InjectRepository(JoinUserPoi)
    private readonly joinUserPoiRepository: Repository<JoinUserPoi>,
  ) {}

  async addJoinUserPoi(joinUserPoi: JoinUserPoiInterface) {
    return await this.joinUserPoiRepository.save(joinUserPoi);
  }

  async getHistoric(user) {
    return await this.joinUserPoiRepository.find({
      where: {
        user,
      },
      relations: ['poi'],
    });
  }
}
