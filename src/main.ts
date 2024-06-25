import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import * as session from 'express-session';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
  await app.listen(3000);
}
bootstrap();
