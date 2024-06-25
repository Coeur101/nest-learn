import { Catch, Injectable, Res, Response } from '@nestjs/common';
import { CreateDasvDto } from './dto/create-dasv.dto';
import { UpdateDasvDto } from './dto/update-dasv.dto';
import * as svgCaptcha from 'svg-captcha';
import { log } from 'console';
import { Session } from 'express-session';
@Injectable()
export class DasvService {
  create(createDasvDto: CreateDasvDto) {
    return 'This action adds a new dasv';
  }
  createCode() {
    const Captcha = svgCaptcha.create({
      size: 4,
      fontSize: 40,
      width: 100,
      height: 34,
      background: '#cc9966',
    });
    return { data: Captcha.data, text: Captcha.text };
  }
  findAll() {
    return `This action returns all dasv`;
  }

  findOne(id: number) {
    return id;
  }

  update(id: number, updateDasvDto: UpdateDasvDto) {
    return `This action updates a #${id} dasv`;
  }
  createUser() {
    return {
      success: 200,
      message: '成功',
    };
  }
  remove(id: number) {
    return `This action removes a #${id} dasv`;
  }
}
