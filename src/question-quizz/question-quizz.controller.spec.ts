import { Test, TestingModule } from '@nestjs/testing';
import { QuestionQuizzController } from './question-quizz.controller';

describe('QuestionQuizz Controller', () => {
  let controller: QuestionQuizzController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionQuizzController],
    }).compile();

    controller = module.get<QuestionQuizzController>(QuestionQuizzController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
