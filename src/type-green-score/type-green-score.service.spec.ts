import { Test, TestingModule } from '@nestjs/testing';
import { TypeGreenScoreService } from './type-green-score.service';

describe('TypeGreenScoreService', () => {
  let service: TypeGreenScoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeGreenScoreService],
    }).compile();

    service = module.get<TypeGreenScoreService>(TypeGreenScoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
