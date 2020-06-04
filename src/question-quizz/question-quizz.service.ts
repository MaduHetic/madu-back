import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { QuestionQuizz } from './questionQuizzEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { Quizz } from '../quizz/quizzEntity';

@Injectable()
export class QuestionQuizzService {
  constructor(
    @InjectRepository(QuestionQuizz)
    private readonly questionQuizzRepository: Repository<QuestionQuizz>,
  ) {}

  async addAnswerQuizz(questionQuizzDto): Promise<QuestionQuizz> {
    return await this.questionQuizzRepository.save(questionQuizzDto);
  }

  async getAnswerByQuizz(quizz: Quizz) {
    return await this.questionQuizzRepository.find({
      select: ['id', 'answer', 'goodAnswer'],
      where: {
        quizz,
      },
    });
  }
}
