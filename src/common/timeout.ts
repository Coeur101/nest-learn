import { CallHandler, ExecutionContext, Injectable, NestInterceptor, RequestTimeoutException } from '@nestjs/common';
import { Observable, TimeoutError, catchError, tap, throwError, timeout } from 'rxjs';

@Injectable()
export class TimeOut implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // 如果接口超时了，给一个超时的报错
    return next.handle().pipe(timeout(5000), catchError((err) => {
      // 如果报错的类型是timeout，则返回timeout的类型报错
      if (err instanceof TimeoutError) {
        console.log(err);
        return throwError(() => new RequestTimeoutException())
      }
      return throwError(() => err)
    }));
  }
}
