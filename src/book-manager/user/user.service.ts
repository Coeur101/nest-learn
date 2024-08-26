import { DbService } from './../db/db.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginUserDto, RegisterUserDto } from '../dtos/user';
import { User } from '../entity/user';

@Injectable()
export class UserService {
  constructor(private readonly DbService: DbService) { }
  async register(userInfo: RegisterUserDto) {
    // 获取数据库里的对象
    const dbUserInfo: User[] = await this.DbService.read()
    // 判断用户名是否重复
    const isExist = dbUserInfo.find(item => item.username === userInfo.username)
    if (isExist) {
      throw new HttpException('用户名已存在', HttpStatus.BAD_REQUEST)
    }
    const user = new User()
    user.username = userInfo.username
    user.password = userInfo.password
    this.DbService.write(user)
    return '注册成功'
  }
  async login(userInfo: LoginUserDto) {
    const dbUserInfo: User[] = await this.DbService.read()
    const isUserExist = dbUserInfo.find(item => item.username === userInfo.username)
    if (!isUserExist) {
      throw new HttpException('用户名不存在', HttpStatus.BAD_REQUEST)
    }
    if (isUserExist.password !== userInfo.password) {
      throw new HttpException('密码错误', HttpStatus.BAD_REQUEST)
    }
    return '登录成功'
  }

}
