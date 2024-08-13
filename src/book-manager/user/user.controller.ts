import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginUserDto, RegisterUserDto } from '../dtos/user';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Post('register')
  register(@Body() registerUser: RegisterUserDto) {
    return this.userService.register(registerUser)
  }
  @Post('login')
  login(@Body() loginUser: LoginUserDto) {
    return this.userService.login(loginUser)
  }
}
