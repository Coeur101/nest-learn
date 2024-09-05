import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBook, UpdateBook } from '../dtos/createBook';
import { FileInterceptor } from '@nestjs/platform-express';
import * as path from 'node:path';
import { config } from 'src/config';
import { storage } from 'src/utils/storage';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) { }
  @Get('list')
  getBookList() {
    return this.bookService.getBookList()
  }
  @Get(':id')
  getOneBook(@Param('id') id: number) {
    console.log(id)
    return this.bookService.getOneBook(id)
  }
  @Post('create')
  createBook(@Body() createBook: CreateBook) {
    return this.bookService.createBook(createBook)
  }
  @Put('update')
  updateBook(@Body() updateBook: UpdateBook) {
    return this.bookService.updateBook(updateBook)
  }
  @Delete('delete/:id')
  // 使用官方参数管道，处理id转换成int
  deleteBook(@Param('id', ParseIntPipe) id: number) {
    return this.bookService.deleteBook(id)
  }
  @Post('upload')
  @UseInterceptors(FileInterceptor('cover', {
    dest: "images",
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 3
    },
    fileFilter(req, file, callback) {
      const extName = path.extname(file.originalname)
      const uploadsType = config.uploads.type
      if (uploadsType.includes(extName)) {
        callback(null, true)
      } else {
        callback(new BadRequestException('上传文件类型错误'), false)

      }
    }
  }))
  uploadBookCover(@UploadedFile() file) {
    if (!file) {
      throw new BadRequestException('请上传文件')
    }
    return {
      path: `/images/${file.filename}`
    }
  }
}
