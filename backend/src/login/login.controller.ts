import { Body, Controller, Post } from '@nestjs/common';
import {
  ChangePasswordDto,
  RegisterUserDto,
  ForgotPasswordDto,
  UserCredentials,
} from './dto/login.dto';

import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly service: LoginService) {}

  @Post('')
  async login(@Body() body: UserCredentials) {
    return this.service.login(body);
  }

  @Post('logout')
  async logout(@Body() body: UserCredentials) {
    return this.service.logout(body);
  }

  @Post('register')
  async register(@Body() body: RegisterUserDto) {
    return this.service.register(body);
  }

  @Post('forgot-password')
  async forgotPassword(@Body() body: ForgotPasswordDto) {
    return this.service.forgotPassword(body);
  }

  @Post('reset-password')
  async resetPassword(@Body() body: ForgotPasswordDto) {
    return this.service.resetPassword;
  }

  @Post('change-password')
  async changePassword(@Body() body: ChangePasswordDto) {
    return this.service.changePassword(body);
  }
}
