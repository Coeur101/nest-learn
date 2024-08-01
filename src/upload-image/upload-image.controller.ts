import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
  Res,
  Req,
} from '@nestjs/common';
import { UploadImageService } from './upload-image.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request, Response } from 'express';
import { join } from 'path';
import { zip } from 'compressing';
@Controller('upload-image')
export class UploadImageController {
  constructor(private readonly uploadImageService: UploadImageService) {}

  @Post('album')
  // 使用上传文件的中间件支持上传文件
  // 使用FileInterceptor字段来上传单个文件 上传多个则使用 FilesInterceptor
  // 传入的字段约束客户端发起请求的字段
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file) {
    // 读文件
    // 这个方法只要一请求就自动将file给保存了，这里参数的file是文件信息
    return {
      message: '上传成功',
      code: 0,
    };
  }
  @Get('export/:path')
  // 普通模式
  // 下载文件
  download(@Res() res: Response, @Req() req: Request) {
    res.download(join(__dirname, '../images/' + req.params.path));
  }
  // 流传输模式
  // 使用compressing 来给文件压缩，然后流式传输
  @Get('stream/:path')
  async downloadStream(@Res() res: Response, @Req() req: Request) {
    const url = join(__dirname, '../images/' + req.params.path);
    const tar = new zip.Stream();
    await tar.addEntry(url);
    // 修改请求头，设置内容为是流
    res.setHeader('content-type', 'application/octet-stream');
    // 设置传输后的文件名称
    res.setHeader('content-disposition', 'attachment; filename="test.zip"');

    // 返回
    tar.pipe(res);
  }
}
