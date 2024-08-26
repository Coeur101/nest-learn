import { IsNotEmpty, IsString } from "class-validator";

export class CreateBook {
  @IsNotEmpty({ message: "图书名称不能为空" })
  @IsString({ message: "图书名称必须是字符串" })
  name: string
  @IsNotEmpty({ message: "作者不能为空" })
  @IsString({ message: "作者必须是字符串" })
  author: string
  @IsNotEmpty({ message: "描述不能为空" })
  @IsString({ message: "描述必须是字符串" })
  description: string
  @IsNotEmpty({ message: "封面路径不能为空" })
  cover: string
}
export class UpdateBook {
  @IsNotEmpty({ message: "id不能为空" })
  id: number
  @IsNotEmpty({ message: "图书名称不能为空" })
  @IsString({ message: "图书名称必须是字符串" })
  name: string
  @IsNotEmpty({ message: "作者不能为空" })
  @IsString({ message: "作者必须是字符串" })
  author: string
  @IsNotEmpty({ message: "描述不能为空" })
  @IsString({ message: "描述必须是字符串" })
  description: string
  @IsNotEmpty({ message: "封面路径不能为空" })
  cover: string
}
