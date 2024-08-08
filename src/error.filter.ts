import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { ErrorException } from './ErrorException';
import { Response } from 'express';

@Catch(HttpException)
export class ErrorFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const httpStatus = exception.getStatus()
    const http = host.switchToHttp()
    const res = http.getResponse<Response>()
    // 使用exception中的相应对象
    const responseException = exception.getResponse() as { message: string[] }
    res.status(httpStatus).json({
      // 对单个参数校验的返回信息做适配
      message: responseException?.message?.join() ? responseException?.message?.join(',') : exception.message,
      status: httpStatus,
      code: 1
    })

  }
}
