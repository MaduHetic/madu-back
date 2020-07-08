import { Test, TestingModule } from '@nestjs/testing';
import { JoinUserPoiService } from './join-user-poi.service';

describe('JoinUserPoiService', () => {
  let service: JoinUserPoiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JoinUserPoiService],
    }).compile();

    service = module.get<JoinUserPoiService>(JoinUserPoiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
