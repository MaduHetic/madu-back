import { Test, TestingModule } from '@nestjs/testing';
import { JoinUserChallengeService } from './join-user-challenge.service';

describe('JoinUserChallengeService', () => {
  let service: JoinUserChallengeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JoinUserChallengeService],
    }).compile();

    service = module.get<JoinUserChallengeService>(JoinUserChallengeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
