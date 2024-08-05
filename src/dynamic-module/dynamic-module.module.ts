import { DynamicModule, Module } from '@nestjs/common';
import { DynamicModuleService } from './dynamic-module.service';
import { DynamicModuleController } from './dynamic-module.controller';

@Module({})
export class DynamicModuleModule {
  // 实现动态模块
  // 这里的options是给AppModule使用的注入的
  static register(options: Record<string, any>): DynamicModule {
    return {
      module: DynamicModuleModule,
      controllers: [DynamicModuleController],
      providers: [{
        provide: "config_options",
        useValue: options
      },
        DynamicModuleService],
      exports: []
    }
  }
}
