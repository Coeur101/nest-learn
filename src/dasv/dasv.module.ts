import { Module } from '@nestjs/common';
import { DasvService } from './dasv.service';
import { DasvController } from './dasv.controller';

@Module({
  controllers: [DasvController],
  // 注入的完整写法
  providers: [
    DasvService,
    // 自定义注入service
    {
      provide: 'testSer',
      useValue: [1, 2, 3],
    },
  ],
})
export class DasvModule {}
