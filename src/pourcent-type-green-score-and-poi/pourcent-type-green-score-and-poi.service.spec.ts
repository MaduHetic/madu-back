import { Test, TestingModule } from '@nestjs/testing';
import { PourcentTypeGreenScoreAndPoiService } from './pourcent-type-green-score-and-poi.service';

describe('PourcentTypeGreenScoreAndPoiService', () => {
  let service: PourcentTypeGreenScoreAndPoiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PourcentTypeGreenScoreAndPoiService],
    }).compile();

    service = module.get<PourcentTypeGreenScoreAndPoiService>(PourcentTypeGreenScoreAndPoiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
