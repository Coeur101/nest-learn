import { Inject, Injectable } from '@nestjs/common';
import { DbModuleOptions } from './db.module';
import * as fs from 'fs'
import * as path from 'path'
@Injectable()
export class DbService {
  @Inject('OPTION')
  private option: DbModuleOptions;
  // 读数据库
  async read() {

    const filePath = this.option.path
    try {
      await fs.promises.access(path.join(__dirname, filePath))
    } catch (error) {
      return []
    }
    const str = await fs.promises.readFile(path.join(__dirname, filePath), { encoding: 'utf-8' })
    if (!str) {
      return []
    }
    return JSON.parse(str)
  }
  // 写数据库
  async write(obj: Record<string, any>[] | Record<string, any>) {
    const db = await this.read()
    db.push({ id: db[db.length - 1]?.id + 1 || 1, ...obj })
    // 叠加写入数据库
    await fs.promises.writeFile(path.join(__dirname, this.option.path), JSON.stringify(db || []), { encoding: 'utf-8' })
    return true
  }
}
