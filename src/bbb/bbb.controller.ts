import { Controller, Get, SetMetadata, UseGuards } from '@nestjs/common';
import { BbbService } from './bbb.service';
import { AaaGuard } from 'src/aaa.guard';
import { CustomDecorator } from 'src/custom-decorator.decorator';
import { concatDecorators } from 'src/utils/concatDecorators';

@Controller('bbb')
export class BbbController {
  constructor(private readonly bbbService: BbbService) { }

  // 简化自定义装饰器
  // @SetMetadata('custom-decorator', 'admin')
  // 分列写入自定义装饰器
  // @CustomDecorator('admin')
  // @Get('/app')
  // @UseGuards(AaaGuard)
  // 合并装饰器,将上方的多个装饰器合并为一个
  @concatDecorators('/app', 'admin')
  getHello() {
    return this.bbbService.getHello();
  }
  @Get('/test')
  getTest() {
    return 'test';
  }
}
