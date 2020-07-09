import { Test, TestingModule } from '@nestjs/testing';
import { JoinUserThemeQuizzService } from './join-user-theme-quizz.service';

describe('JoinUserThemeQuizzService', () => {
  let service: JoinUserThemeQuizzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JoinUserThemeQuizzService],
    }).compile();

    service = module.get<JoinUserThemeQuizzService>(JoinUserThemeQuizzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
