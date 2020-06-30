import { Test, TestingModule } from '@nestjs/testing';
import { ThemeQuizzController } from './theme-quizz.controller';

describe('ThemeQuizz Controller', () => {
  let controller: ThemeQuizzController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThemeQuizzController],
    }).compile();

    controller = module.get<ThemeQuizzController>(ThemeQuizzController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
