import { Injectable } from '@nestjs/common';
import LoginServiceInterface from './interface/login.service.interface';
import { ChangePasswordDto, ForgotPasswordDto, RegisterUserDto, UserCredentials } from './dto/login.dto';
import UserResponseDto from './dto/login.response.dto';
import LoginRepositoryInterface from './interface/prisma.service.interface';
import LoginRepository from './login.repository';

@Injectable()
export class LoginService implements LoginServiceInterface {
  constructor(private readonly prismaService: LoginRepository) {}

  async login(userData: UserCredentials): Promise<UserResponseDto> {
    return this.prismaService.login(userData);
  }

  async logout(userData: UserCredentials): Promise<boolean> {
    return this.prismaService.logout(userData);
  }

  async register(userData: RegisterUserDto): Promise<UserResponseDto> {
    return this.prismaService.register(userData);
  }

  async forgotPassword(userData: ForgotPasswordDto): Promise<UserResponseDto> {
    return this.prismaService.forgotPassword(userData);
  }

  async resetPassword(userData: ChangePasswordDto): Promise<UserResponseDto> {
    return this.prismaService.changePassword(userData);
  }

  async changePassword(userData: ChangePasswordDto): Promise<UserResponseDto> {
    return this.prismaService.changePassword(userData);
  }
}
