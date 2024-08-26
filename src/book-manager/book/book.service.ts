import { DbService } from './../db/db.service';
import { Inject, Injectable } from '@nestjs/common';
import { CreateBook, UpdateBook } from '../dtos/createBook';
import { Book } from '../entity/book';

@Injectable()
export class BookService {
  constructor(private readonly DbService: DbService) { }
  getBookList() { }
  getOneBook(id: string) { }
  async createBook(createBook: CreateBook) {
    const book = new Book()
    Object.assign(book, createBook)
    try {
      this.DbService.write(book)
    } catch (error) {
    }
    return '创建成功'
  }
  updateBook(updateBook: UpdateBook) { }
  deleteBook(id: string) { }
}
