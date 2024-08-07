import { Controller, Get, Next, UseInterceptors } from '@nestjs/common';
import { ResInterceptorService } from './res-interceptor.service';
import { ApiInterceptor } from 'src/common/api.interceptor';
import { TimeOut } from 'src/common/timeout';

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
}
