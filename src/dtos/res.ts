import { IsInt, isInt } from 'class-validator';

// 数据校验
export class resDtos {
  @IsInt({
    message: (msg) => {
      // 单个控制的报错拦截信息
      return msg.property + '必须是数字';
    },
  })
  number: number;
}
