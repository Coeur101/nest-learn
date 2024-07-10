import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { ErrorException } from './ErrorException';

@Catch(ErrorException)
export class ErrorFilter<T> implements ExceptionFilter {
  catch(exception: ErrorException, host: ArgumentsHost) {
    console.log(exception, host);
  }
}
