import { Test, TestingModule } from '@nestjs/testing';
import { JoinTypePoiService } from './join-type-poi.service';

describe('JoinTypePoiService', () => {
  let service: JoinTypePoiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JoinTypePoiService],
    }).compile();

    service = module.get<JoinTypePoiService>(JoinTypePoiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
