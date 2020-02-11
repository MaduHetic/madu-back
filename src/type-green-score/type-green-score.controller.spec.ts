import { Test, TestingModule } from '@nestjs/testing';
import { TypeGreenScoreController } from './type-green-score.controller';

describe('TypeGreenScore Controller', () => {
  let controller: TypeGreenScoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeGreenScoreController],
    }).compile();

    controller = module.get<TypeGreenScoreController>(TypeGreenScoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
