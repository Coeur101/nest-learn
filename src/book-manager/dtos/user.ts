import { IsNotEmpty, IsString, MinLength } from "class-validator"


export class RegisterUserDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @IsString({ message: '用户名必须是字符串' })
  username: string
  @IsNotEmpty({ message: '密码不能为空' })
  @MinLength(6, { message: "密码最少6位" })
  password: string
}

export class LoginUserDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @IsString({ message: '用户名必须是字符串' })
  username: string
  @IsNotEmpty({ message: '密码不能为空' })
  @MinLength(6, { message: "密码最少6位" })
  password: string
}
