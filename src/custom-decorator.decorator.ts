import { SetMetadata } from '@nestjs/common';
// 自定义装饰器
export const CustomDecorator = (...args: string[]) => SetMetadata('custom-decorator', args);
