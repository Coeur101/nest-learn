import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BbbController } from './bbb/bbb.controller';
import { BbbService } from './bbb/bbb.service';
import { BbbModule } from './bbb/bbb.module';
import { DasvModule } from './dasv/dasv.module';
@Module({
  imports: [BbbModule, DasvModule],
  controllers: [AppController, BbbController],
  providers: [AppService, BbbService],
})
export class AppModule {}
