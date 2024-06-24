import { Controller, Get } from '@nestjs/common';
import { BbbService } from './bbb.service';

@Controller('bbb')
export class BbbController {
  constructor(private readonly bbbService: BbbService) {}
  @Get('/app')
  getHello() {
    return this.bbbService.getHello();
  }
}
