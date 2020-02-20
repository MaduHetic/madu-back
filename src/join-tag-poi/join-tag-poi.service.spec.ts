import { Test, TestingModule } from '@nestjs/testing';
import { JoinTagPoiService } from './join-tag-poi.service';

describe('JoinTagPoiService', () => {
  let service: JoinTagPoiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JoinTagPoiService],
    }).compile();

    service = module.get<JoinTagPoiService>(JoinTagPoiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
