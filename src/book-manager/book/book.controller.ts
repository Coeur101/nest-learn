import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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
  deleteBook(@Param('id') id: number) {
    return this.bookService.deleteBook(id)
  }
}
