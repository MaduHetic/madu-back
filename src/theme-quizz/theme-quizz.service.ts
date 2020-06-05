import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ThemeQuizz } from './themeQuizzEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { ThemeAndQuizzDto } from './themeAndQuizzDto';
import { QuizzService } from '../quizz/quizz.service';

@Injectable()
export class ThemeQuizzService {
  constructor(
    @InjectRepository(ThemeQuizz)
    private readonly themeQuizzRepository: Repository<ThemeQuizz>,
    private readonly quizzService: QuizzService,
  ) {}

  async addThemeAndQuizz(themeAndQuizzDto: ThemeAndQuizzDto) {
    const {theme, infoQuizz} = themeAndQuizzDto;
    const themeEntity = await this.themeQuizzRepository.save(theme);
    await Promise.all(infoQuizz.map(async (quizz) => {
      const addThemeToQuizz: any = quizz;
      addThemeToQuizz.question.themeQuizz = themeEntity;
      return await this.quizzService.addQuizz(addThemeToQuizz);
    }));
    return themeEntity;
  }

  async getTheme(): Promise<ThemeQuizz[]> {
    return await this.themeQuizzRepository.find();
  }

  async getOneTheme(idTheme: number): Promise<ThemeQuizz> {
    return await this.themeQuizzRepository.findOneOrFail({
      where: {
        id: idTheme,
      },
    }).catch(() => {
      throw new NotFoundException(`theme with id ${idTheme} Not Found`);
    });
  }

  async getQuestionTheme(idTheme: number) {
    const theme = await this.getOneTheme(idTheme);
    return await this.quizzService.getQuizzByTheme(theme);
  }
}
