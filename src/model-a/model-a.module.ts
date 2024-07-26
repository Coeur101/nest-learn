import { Module, forwardRef } from '@nestjs/common';
import { ModelBModule } from 'src/model-b/model-b.module';

@Module({
  // 互相引用module
  // imports: [ModelBModule]
  // 使用forwardRef来转发
  imports: [
    forwardRef(() => ModelBModule)
  ]
})
export class ModelAModule { }
