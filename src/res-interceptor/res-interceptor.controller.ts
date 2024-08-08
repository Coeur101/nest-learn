import { Body, Controller, Get, HttpException, HttpStatus, Next, Post, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { ResInterceptorService } from './res-interceptor.service';
import { ApiInterceptor } from 'src/common/api.interceptor';
import { TimeOut } from 'src/common/timeout';
import { resDtos } from 'src/dtos/res';

@Controller('res-interceptor')
@UseInterceptors(ApiInterceptor)
// @UseInterceptors(ApiInterceptor)
export class ResInterceptorController {
  constructor(private readonly resInterceptorService: ResInterceptorService) { }
  @Get()
  // 使用接口拦截器

  getHello(): string {
    return 'hello'
  }
  @UseInterceptors(TimeOut)
  @Get('/timeout')
  async getTimeOut() {
    await new Promise(resolve => setTimeout(() => resolve, 6000))
    return 'hello'
  }
  @Post('aaa')
  // 使用参数校验
  // 也可以使用自定义的参数报错提示
  dataValidator(@Body(new ValidationPipe({
    // 自定义的报错行为
    // exceptionFactory: (msg) => {
    //   throw new HttpException('参数校验错误', HttpStatus.NOT_FOUND)
    // }
  })) obj: resDtos) {
    return obj
  }
}
