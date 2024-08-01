import { Module } from '@nestjs/common';
import { ResInterceptorService } from './res-interceptor.service';
import { ResInterceptorController } from './res-interceptor.controller';

@Module({
  controllers: [ResInterceptorController],
  providers: [ResInterceptorService],
})
export class ResInterceptorModule {}
