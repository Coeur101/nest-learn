import {
  Body,
  Controller,
  Get,
  Header,
  Headers,
  Post,
  Query,
  Req,
  Request,
} from '@nestjs/common';
import { DasvService } from './dasv.service';
import { log } from 'console';
// controller变为对象形式，指定统一路由前缀和版本号
// 指定1的话就是默认v1 http://localhost:3000/v1/dasv
@Controller({
  path: 'dasv',
  version: '1',
})
export class DasvController {
  constructor(private readonly dasvService: DasvService) {}
  @Get()
  findAll(@Request() req) {
    log(req);
    return {
      sucess: 200,
    };
  }
}
