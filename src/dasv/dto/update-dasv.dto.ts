import { PartialType } from '@nestjs/mapped-types';
import { CreateDasvDto } from './create-dasv.dto';

export class UpdateDasvDto extends PartialType(CreateDasvDto) {}
