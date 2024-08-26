import { Module } from '@nestjs/common';
import { UploadImageService } from './upload-image.service';
import { UploadImageController } from './upload-image.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

@Module({
  // 动态模块使用
  imports: [
    MulterModule.register({
      // 上传完成后图片存放的位置
      storage: diskStorage({
        // 存放位置路径拼接
        destination: join(__dirname, '../images'),
        filename(_, file, callback) {
          // 对文件名称重命名
          const filename = `${new Date().getTime() + extname(file.originalname)}`;
          return callback(null, filename);
        },
      }),
    }),
  ],
  controllers: [UploadImageController],
  providers: [UploadImageService],
})
export class UploadImageModule { }
