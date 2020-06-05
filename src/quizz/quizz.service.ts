import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Quizz } from './quizzEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionQuizzService } from '../question-quizz/question-quizz.service';
import { ThemeQuizz } from '../theme-quizz/themeQuizzEntity';

@Injectable()
export class QuizzService {
  constructor(
    @InjectRepository(Quizz)
    private readonly quizzRepository: Repository<Quizz>,
    private readonly questionQuizzService: QuestionQuizzService,
  ) {}

  async addQuizz(quizzDto) {
    const {question, answers} = quizzDto;
    const quizz =  await this.quizzRepository.save(question);
    await Promise.all(answers.map(async (answer) => {
      answer.quizz = quizz;
      return  await this.questionQuizzService.addAnswerQuizz(answer);
    }));
    return quizz;
  }

  async getQuizzs() {
    const quizzs = await this.quizzRepository.find({
      select: ['id', 'question'],
    });
    return Promise.all(quizzs.map(async (quizz) => {
      const quizAndAnswer: any = quizz;
      quizAndAnswer.answer = await this.questionQuizzService.getAnswerByQuizz(quizz);
      return quizAndAnswer;
    }));
  }

  async getQuizzByTheme(theme: ThemeQuizz) {
    const quizzs = await this.quizzRepository.find({
      select: ['id', 'question'],
      where: {
        themeQuizz: theme,
      },
    });
    return Promise.all(quizzs.map(async (quizz) => {
      const quizAndAnswer: any = quizz;
      quizAndAnswer.answer = await this.questionQuizzService.getAnswerByQuizz(quizz);
      return quizAndAnswer;
    }));
  }

}
