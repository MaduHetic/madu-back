import { Test, TestingModule } from '@nestjs/testing';
import { GreenScoreService } from './green-score.service';

describe('GreenScoreService', () => {
  let service: GreenScoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GreenScoreService],
    }).compile();

    service = module.get<GreenScoreService>(GreenScoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
