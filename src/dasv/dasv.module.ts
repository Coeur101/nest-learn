import { Module } from '@nestjs/common';
import { DasvService } from './dasv.service';
import { DasvController } from './dasv.controller';

@Module({
  controllers: [DasvController],
  providers: [DasvService],
})
export class DasvModule {}
