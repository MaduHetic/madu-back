import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { JoinUserPoi } from './joinUserPoiEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { JoinUserPoiInterface } from './join-user-poi.interface';
import { UserService } from '../user/user.service';
import { User } from '../user/userEntity';
import { Poi } from '../poi/poiEntity';

@Injectable()
export class JoinUserPoiService {
  constructor(
    @InjectRepository(JoinUserPoi)
    private readonly joinUserPoiRepository: Repository<JoinUserPoi>,
    private readonly userService: UserService,
  ) {}

  async getOne(user: User, poi: Poi) {
    try {
      return await this.joinUserPoiRepository.findOneOrFail({
        where: {
          user,
          poi,
        },
      });
    } catch (e) {
      return  null;
    }
  }

  async addJoinUserPoi(joinUserPoi: JoinUserPoiInterface) {
    if (!(await this.getOne(joinUserPoi.user, joinUserPoi.poi))) {
      return await this.joinUserPoiRepository.save(joinUserPoi);
    } else {
      return 'OK';
    }
  }

  async getHistoric(user) {
    const lists = await this.joinUserPoiRepository.find({
      where: {
        user,
      },
      relations: ['poi'],
    });
    return await Promise.all(lists.map(async (list) => {
      return list.poi;
    }));
  }
}
