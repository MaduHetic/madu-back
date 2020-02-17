import { Test, TestingModule } from '@nestjs/testing';
import { PercentTypeGreenScoreAndPoiService } from './percent-type-green-score-and-poi.service';

describe('PourcentTypeGreenScoreAndPoiService', () => {
  let service: PercentTypeGreenScoreAndPoiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PercentTypeGreenScoreAndPoiService],
    }).compile();

    service = module.get<PercentTypeGreenScoreAndPoiService>(PercentTypeGreenScoreAndPoiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
