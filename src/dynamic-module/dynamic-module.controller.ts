import { Controller, Get, Inject } from '@nestjs/common';
import { DynamicModuleService } from './dynamic-module.service';

@Controller('dynm')
export class DynamicModuleController {
  constructor(private readonly dynamicModuleService: DynamicModuleService, @Inject('config_options') private aaaa: any) { }
  @Get('test')
  getHello(): string {
    console.log(this.aaaa);
    return '1'
  }
}
