import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DbModule } from '../db/db.module';

@Module({
  // 使用动态模块，相当于用的一个db模块，但是数据库不一样就使用这个来动态传入数据库路径
  imports: [DbModule.register({ path: "users.json" })],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
