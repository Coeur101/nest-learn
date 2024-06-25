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
    // 工厂模式
    {
      provide: 'project',
      // 需要inject注入一个service
      inject: [DasvService],
      useFactory(DasvService: DasvService) {
        if (DasvService.findOne(1) === 1) {
          return {
            name: 'test',
          };
        }
      },
    },
  ],
})
export class DasvModule {}
