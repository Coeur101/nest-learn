import { Controller } from '@nestjs/common';
import { ResInterceptorService } from './res-interceptor.service';

@Controller('res-interceptor')
export class ResInterceptorController {
  constructor(private readonly resInterceptorService: ResInterceptorService) {}
}
