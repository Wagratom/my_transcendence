import { Body, Controller, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import {
  ChangePasswordDto,
  RegisterUserDto,
  ForgotPasswordDto,
  UserCredentials,
} from './dto/login.dto';

import { LoginService } from './login.service';
import { LoginAuthResponseDto, LoginDefaultResponseDto } from './dto/login.response.dto';
import { Response } from 'express';

@Controller('login')
export class LoginController {
  constructor(private readonly service: LoginService) {}

  @Post('')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() body: UserCredentials,
    @Res({ passthrough: true }) response: Response
  ) : Promise<LoginAuthResponseDto>
  {
    const userData = await this.service.login(body);
    response.cookie('jwt', userData.token, {
      httpOnly: true,
      secure: false, // Use true em produção, quando estiver usando HTTPS
      sameSite: 'strict' // ou 'strict' conforme necessário
    });
   return userData
  }

  @Post('logout')
  async logout(@Body() body: UserCredentials) : Promise<boolean>{
    return this.service.logout(body);
  }

  @Post('register')
  async register(@Body() body: RegisterUserDto) : Promise<LoginDefaultResponseDto>{
    return this.service.register(body);
  }

  @Post('forgot-password')
  async forgotPassword(@Body() body: ForgotPasswordDto) : Promise<LoginDefaultResponseDto>{
    return this.service.forgotPassword(body);
  }

  // @Post('reset-password')
  // async resetPassword(@Body() body: ForgotPasswordDto) : Promise<LoginDefaultResponseDto>{
  //   return await this.service.resetPassword;
  // }

  @Post('change-password')
  async changePassword(@Body() body: ChangePasswordDto) : Promise<LoginDefaultResponseDto>{
    return await this.service.changePassword(body);
  }
}
