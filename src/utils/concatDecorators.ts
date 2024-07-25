import { Get, UseGuards, applyDecorators } from "@nestjs/common"
import { AaaGuard } from "src/aaa.guard"
import { CustomDecorator } from "src/custom-decorator.decorator"
// 合并装饰器
export const concatDecorators = (path: string, role: any) => {
  return applyDecorators(
    Get(path),
    CustomDecorator(role),
    UseGuards(AaaGuard)
  )
}
