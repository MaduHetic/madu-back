import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { JoinUserThemeQuizz } from './joinUserThemeQuizzEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/userEntity';
import { ThemeQuizz } from '../theme-quizz/themeQuizzEntity';

@Injectable()
export class JoinUserThemeQuizzService {
  constructor(
    @InjectRepository(JoinUserThemeQuizz)
    private readonly joinUserThemeQuizzRepository: Repository<JoinUserThemeQuizz>,
  ) {}

  async addJoinUserThemeQuizz(user: User, themeQuizz: ThemeQuizz) {
    const jUtQtoAdd = {
      user,
      themeQuizz,
    };
    return await this.joinUserThemeQuizzRepository.save(jUtQtoAdd);
  }

  async getByUserAndThemeQuizz(user: User, themeQuizz: ThemeQuizz) {
    try {
      return await this.joinUserThemeQuizzRepository.findOneOrFail({
        where: {
          user,
          themeQuizz,
        },
      });
    } catch (e) {
      return  null;
    }
  }
}
