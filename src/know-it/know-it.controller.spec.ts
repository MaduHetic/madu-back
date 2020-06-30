import { Test, TestingModule } from '@nestjs/testing';
import { KnowItController } from './know-it.controller';

describe('KnowIt Controller', () => {
  let controller: KnowItController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KnowItController],
    }).compile();

    controller = module.get<KnowItController>(KnowItController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
