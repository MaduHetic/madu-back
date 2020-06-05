import { Test, TestingModule } from '@nestjs/testing';
import { ImgPoiService } from './img-poi.service';

describe('ImgPoiService', () => {
  let service: ImgPoiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImgPoiService],
    }).compile();

    service = module.get<ImgPoiService>(ImgPoiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
