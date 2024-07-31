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
@Module({
  imports: [BbbModule, DasvModule, ModelAModule, ModelBModule, UploadImageModule],
  controllers: [AppController, BbbController],
  providers: [AppService, BbbService],
})
export class AppModule {}
