import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ApiInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // 计算接口耗时时间
    const now = new Date()
    return next.handle().pipe(tap(() => {
      console.log('耗时：' + (new Date().getTime() - now.getTime()) + 'ms');
    }));
  }
}
