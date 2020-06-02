import { Test, TestingModule } from '@nestjs/testing';
import { KnowItService } from './know-it.service';

describe('KnowItService', () => {
  let service: KnowItService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KnowItService],
    }).compile();

    service = module.get<KnowItService>(KnowItService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
