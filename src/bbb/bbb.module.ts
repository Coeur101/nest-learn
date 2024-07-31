import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BbbController } from './bbb.controller';
import { BbbService } from './bbb.service';
import { LoggerMiddleware } from 'src/logger/logger.middleware';

@Module({
  imports: [],
  controllers: [BbbController],
  providers: [BbbService],
})
// 使用中间件约束当前类
export class BbbModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer消费者，去消费我们的中间件 并指定哪个路由前缀需要用到这个中间件
    // 默认传参为path,对象传参:
    // { path:限制需要限制的路由前缀,method:RequestMethod.GET 限制请求类型}
    consumer.apply(LoggerMiddleware).forRoutes('bbb/test');
  }
}
