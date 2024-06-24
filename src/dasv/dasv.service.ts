import { Injectable } from '@nestjs/common';
import { CreateDasvDto } from './dto/create-dasv.dto';
import { UpdateDasvDto } from './dto/update-dasv.dto';

@Injectable()
export class DasvService {
  create(createDasvDto: CreateDasvDto) {
    return 'This action adds a new dasv';
  }

  findAll() {
    return `This action returns all dasv`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dasv`;
  }

  update(id: number, updateDasvDto: UpdateDasvDto) {
    return `This action updates a #${id} dasv`;
  }

  remove(id: number) {
    return `This action removes a #${id} dasv`;
  }
}
