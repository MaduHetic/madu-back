import { Test, TestingModule } from '@nestjs/testing';
import { PercentTypeGreenScoreAndPoiController } from './percent-type-green-score-and-poi.controller';

describe('PercentTypeGreenScoreAndPoi Controller', () => {
  let controller: PercentTypeGreenScoreAndPoiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PercentTypeGreenScoreAndPoiController],
    }).compile();

    controller = module.get<PercentTypeGreenScoreAndPoiController>(PercentTypeGreenScoreAndPoiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
