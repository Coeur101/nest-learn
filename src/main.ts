import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Res, ValidationPipe, VersioningType } from '@nestjs/common';
import * as session from 'express-session';
import { ErrorFilter } from './error.filter';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { res } from './common/res';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 配置静态资源访问目录
  app.useStaticAssets(join(__dirname, './images'));
  // 添加统一版本号在url上
  app.enableVersioning({
    type: VersioningType.URI,
  });
  // 生成服务端session签名
  app.use(
    session({
      secret: 'coeur',
      rolling: true, // 设置每次请求都强制设置cookie,重置cookie过期时间
      name: 'couerSid', // cookie名字
      cookie: {
        maxAge: 1000 * 60 * 60, // 过期时间 如果为负数则只为当前会话
      },
    })
  );
  // 使用全局拦截器
  app.useGlobalInterceptors(new res());
  // nest自处理参数验证返回的结果
  app.useGlobalPipes(new ValidationPipe())
  // 全局启用捕获错误过滤器
  app.useGlobalFilters(new ErrorFilter());
  await app.listen(3000);
}
bootstrap();
