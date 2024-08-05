import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BbbController } from './bbb/bbb.controller';
import { BbbService } from './bbb/bbb.service';
import { BbbModule } from './bbb/bbb.module';
import { DasvModule } from './dasv/dasv.module';
import { ModelAModule } from './model-a/model-a.module';
import { ModelBModule } from './model-b/model-b.module';
import { UploadImageModule } from './upload-image/upload-image.module';
import { ResInterceptorModule } from './res-interceptor/res-interceptor.module';
import { DynamicModuleModule } from './dynamic-module/dynamic-module.module';
@Module({
  imports: [BbbModule, DasvModule, ModelAModule, ModelBModule, UploadImageModule, ResInterceptorModule, DynamicModuleModule.register({
    // 注入给模块值，然后通过动态provider使用
    aa: 123,
    bb: 231
  })],
  controllers: [AppController, BbbController],
  providers: [AppService, BbbService],
})
export class AppModule { }
