import { Module, forwardRef } from '@nestjs/common';
import { ModelAModule } from 'src/model-a/model-a.module';

@Module({
  // 互相引用module
  // imports: [ModelAModule]
  // 形成循环依赖，造成启动报错
  // 使用forwarRef 来转发module
  imports: [
    forwardRef(() => ModelAModule)
  ]
})
export class ModelBModule { }
