import { Test, TestingModule } from '@nestjs/testing';
import { QuestionQuizzService } from './question-quizz.service';

describe('QuestionQuizzService', () => {
  let service: QuestionQuizzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionQuizzService],
    }).compile();

    service = module.get<QuestionQuizzService>(QuestionQuizzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
