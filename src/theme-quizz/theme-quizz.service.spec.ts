import { Test, TestingModule } from '@nestjs/testing';
import { ThemeQuizzService } from './theme-quizz.service';

describe('ThemeQuizzService', () => {
  let service: ThemeQuizzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThemeQuizzService],
    }).compile();

    service = module.get<ThemeQuizzService>(ThemeQuizzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
