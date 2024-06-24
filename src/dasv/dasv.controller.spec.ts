import { Test, TestingModule } from '@nestjs/testing';
import { DasvController } from './dasv.controller';
import { DasvService } from './dasv.service';

describe('DasvController', () => {
  let controller: DasvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DasvController],
      providers: [DasvService],
    }).compile();

    controller = module.get<DasvController>(DasvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
