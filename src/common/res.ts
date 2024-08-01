import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
interface Data<T> {
  data: T;
}
// 代表是可依赖注入的类
@Injectable()
export class res<T> implements NestInterceptor {
  // 实现自定义拦截器
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<Data<T>> | Promise<Observable<Data<T>>> {
    // 是哟个RXjs的功能，用pipe管道来对数据进行处理
    return next
      .handle()
      .pipe(map((data) => ({ code: 0, messagge: '请求成功', data })));
  }
}
