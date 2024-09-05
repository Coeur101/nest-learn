import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { DbModule } from '../db/db.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
// MulterModule.register({
//   storage: diskStorage({
//     // 存放位置路径拼接
//     destination: join(__dirname, '../images'),
//     filename(_, file, callback) {
//       // 对文件名称重命名
//       const filename = `${new Date().getTime() + extname(file.originalname)}`;
//       return callback(null, filename);
//     },
//   }),
// })
@Module({
  imports: [DbModule.register({ path: 'book.json' })],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule { }
