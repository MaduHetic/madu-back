import { Test, TestingModule } from '@nestjs/testing';
import { GreenScoreController } from './green-score.controller';

describe('GreenScore Controller', () => {
  let controller: GreenScoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GreenScoreController],
    }).compile();

    controller = module.get<GreenScoreController>(GreenScoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
