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
  // nest约定了三个 方法供给外部使用 register forRoot forFeature
  // register 代表是一次性的，使用一次就传一次配置
  // forRoot 代表全局的，一般是在AppModule使用。然后传一次的配置后续就不会变动了
  // forFeature 代表forRoot的扩展 具体是在各个模块中的imports导入然后传入特定当前模块需要的配置，比如TypeOrm的模块
}
