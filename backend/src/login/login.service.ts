import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  ChangePasswordDto,
  ForgotPasswordDto,
  RegisterUserDto,
  UserCredentials,
} from './dto/login.dto';

import LoginServiceInterface from './interface/login.service.interface';
import {LoginDefaultResponseDto, LoginAuthResponseDto} from './dto/login.response.dto';
import LoginRepository from './login.repository';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class LoginService implements LoginServiceInterface {
  constructor(
    private readonly prismaService: LoginRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login(userData: UserCredentials): Promise<LoginAuthResponseDto> {
    let user = await this.prismaService.findUser(userData.login);

    if (user) {
      const payload = { sub: user.id, username: user.login };
      const token = this.jwtService.sign(payload);
      return new LoginAuthResponseDto(user, token);
    }
    throw new NotFoundException('User not found');
  }

  async logout(userData: UserCredentials): Promise<boolean> {
    return this.prismaService.logout(userData);
  }

  async register(userData: RegisterUserDto): Promise<LoginDefaultResponseDto> {
    let user = await this.prismaService.findUser(userData.login);
    if (user) {
      throw new ConflictException('User already exist')
    }
    return  await this.prismaService.register(userData);
  }

  async forgotPassword(userData: ForgotPasswordDto): Promise<LoginDefaultResponseDto> {
    return await this.prismaService.forgotPassword(userData);
  }

  async resetPassword(userData: ChangePasswordDto): Promise<LoginDefaultResponseDto> {
    return await this.prismaService.changePassword(userData);
  }

  async changePassword(userData: ChangePasswordDto): Promise<LoginDefaultResponseDto> {
    return  await this.prismaService.changePassword(userData);
  }
}
