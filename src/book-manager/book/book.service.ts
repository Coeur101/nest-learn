import { DbService } from './../db/db.service';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateBook, UpdateBook } from '../dtos/createBook';
import { Book } from '../entity/book';

@Injectable()
export class BookService {
  constructor(private readonly DbService: DbService) { }
  getBookList() { }
  async getOneBook(id: number) {
    const books: Book[] = await this.DbService.read()
    const data = books.find(book => book.id === Number(id))
    return data || []

  }
  async createBook(createBook: CreateBook) {
    const books = await this.DbService.read() || []
    const book = new Book()
    Object.assign(book, createBook)
    books.push({ id: books[books.length - 1]?.id + 1 || 1, ...book })
    try {
      this.DbService.write(books)
    } catch (error) {
    }
    return '创建成功'
  }
  async updateBook(updateBook: UpdateBook) {
    const books: Book[] = await this.DbService.read()
    const book = books.find(e => e.id === updateBook.id)
    if (!book) {
      throw new BadRequestException('图书不存在，更新失败')
    }
    Object.assign(book, updateBook)
    this.DbService.write(books)
    return book

  }
  async deleteBook(id: number) {
    const books: Book[] = await this.DbService.read()
    const bookIndex = books.findIndex(e => e.id === id)
    if (bookIndex !== -1) {
      books.splice(bookIndex, 1)
      this.DbService.write(books)
    } else {
      throw new BadRequestException('图书不存在,删除失败')
    }
    return '删除成功'
  }
}
