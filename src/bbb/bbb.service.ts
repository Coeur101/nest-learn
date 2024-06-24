import { Injectable } from '@nestjs/common';

@Injectable()
export class BbbService {
  getHello() {
    return 'hello bbb';
  }
}
