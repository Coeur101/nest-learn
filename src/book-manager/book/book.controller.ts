import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBook, UpdateBook } from '../dtos/createBook';

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
}
