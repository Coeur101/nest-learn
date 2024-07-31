import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UploadImageService } from './upload-image.service';
import { CreateUploadImageDto } from './dto/create-upload-image.dto';
import { UpdateUploadImageDto } from './dto/update-upload-image.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload-image')
export class UploadImageController {
  constructor(private readonly uploadImageService: UploadImageService) { }

  @Post('album')
  // 使用上传文件的中间件支持上传文件
  // 使用FileInterceptor字段来上传单个文件 上传多个则使用 FilesInterceptor
  // 传入的字段约束客户端发起请求的字段
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file) {
    // 读文件
    console.log(file)
    return '1111'
  }
}
