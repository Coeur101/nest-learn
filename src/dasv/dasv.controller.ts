import { Controller, Get, Inject, Param, Res, Session, UseFilters } from '@nestjs/common';
import { DasvService } from './dasv.service';
import { log } from 'console';
import { ErrorException } from 'src/ErrorException';
import { ErrorFilter } from 'src/error.filter';

// controller变为对象形式，指定统一路由前缀和版本号
// 指定1的话就是默认v1 http://localhost:3000/v1/dasv
@Controller({
  path: 'dasv',
  version: '1',
})
export class DasvController {
  constructor(
    private readonly dasvService: DasvService,
    // 使用自定义service
    @Inject('testSer') private readonly testSer: number[],
    @Inject('project') private readonly project: any
  ) { }
  // 随机生成 验证码
  @Get('/code')
  // 通过装饰器拿到session，往session里注入随机验证码
  createCode(@Res() res, @Session() session) {
    const { data, text } = this.dasvService.createCode();
    session.code = text;
    // 返回格式为图片，调用原生的res.send方法，不使用return
    res.type('image/svg+xml');
    res.send(data);
  }
  @Get('/code/:code')
  createUser(@Param() param, @Session() session) {
    log(param.code);
    log(session.code);
    if (param.code.toLowerCase() === session.code.toLowerCase()) {
      return this.dasvService.createUser();
    } else {
      return {
        success: 400,
        message: '验证码错误',
      };
    }
  }
  @Get()
  findAll() {
    //throw new ErrorException('123', '456');
    return {
      message: this.project,
      sucess: 200,
    };
  }
}
