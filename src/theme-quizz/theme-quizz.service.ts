import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ThemeQuizz } from './themeQuizzEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { ThemeAndQuizzDto } from './themeAndQuizzDto';
import { QuizzService } from '../quizz/quizz.service';
import { QuestionQuizzService } from '../question-quizz/question-quizz.service';
import { UserService } from '../user/user.service';

@Injectable()
export class ThemeQuizzService {
  constructor(
    @InjectRepository(ThemeQuizz)
    private readonly themeQuizzRepository: Repository<ThemeQuizz>,
    private readonly quizzService: QuizzService,
    private readonly questionQuizzService: QuestionQuizzService,
    private readonly userService: UserService,
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

  async checkAnswers(answers, idThemeQuizz: number, user) {
    const themeQuizz = await this.getOneTheme(idThemeQuizz);
    const quizzs = await this.quizzService.getQuizzByTheme(themeQuizz);
    let goodAnswer = 0;
    let checkNbAnswer = 0;
    let gain = themeQuizz.reward;
    const checkAnswer = await Promise.all(answers.map(async (answer, i) => {
      const answ = await this.questionQuizzService.checkAnswer(answer.idQuizz, answer.idAnswer);
      if (answ.goodAnswer) {
        goodAnswer++;
      } else {
        gain -= themeQuizz.reward / quizzs.length;
      }
      checkNbAnswer++;
      return answ;
    }));
    if (goodAnswer > quizzs.length || checkNbAnswer !== quizzs.length) {
      throw new ConflictException('Bien essayé petit tricheur :)');
    }
    await this.userService.addCrystal(gain, user)
    return {
      totalAnswer: quizzs.length,
      goodAnswer,
      reward: gain,
    };
  }
}
