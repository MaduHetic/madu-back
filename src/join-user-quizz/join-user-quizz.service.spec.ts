import { Test, TestingModule } from '@nestjs/testing';
import { JoinUserQuizzService } from './join-user-quizz.service';

describe('JoinUserQuizzService', () => {
  let service: JoinUserQuizzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JoinUserQuizzService],
    }).compile();

    service = module.get<JoinUserQuizzService>(JoinUserQuizzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
