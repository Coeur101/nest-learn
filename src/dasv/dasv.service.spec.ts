import { Test, TestingModule } from '@nestjs/testing';
import { DasvService } from './dasv.service';

describe('DasvService', () => {
  let service: DasvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DasvService],
    }).compile();

    service = module.get<DasvService>(DasvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
