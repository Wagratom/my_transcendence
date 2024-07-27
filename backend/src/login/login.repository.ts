import { Injectable, NotAcceptableException } from '@nestjs/common';
import LoginRepositoryInterface from './interface/prisma.service.interface';
import {
  ChangePasswordDto,
  ForgotPasswordDto,
  RegisterUserDto,
  UserCredentials,
} from './dto/login.dto';
import UserResponseDto from './dto/login.response.dto';
import { PrismaService } from 'src/PrismaDB/prisma.connect';

@Injectable()
export default class LoginRepository implements LoginRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async findUser(userData: UserCredentials): Promise<UserResponseDto> {
    let user = await this.prismaService.user.findUnique({
      where: {
        login: userData.login,
        password: userData.password,
      },
    });
    if (!user) {
      return null;
    }
    return new UserResponseDto(user);
  }

  async login(userData: UserCredentials): Promise<UserResponseDto> {
    let user = await this.prismaService.user.findUnique({
      where: {
        login: userData.login,
        password: userData.password,
      },
    });
    return new UserResponseDto(user);
  }

  async logout(userData: UserCredentials): Promise<boolean> {
    await this.prismaService.user.update({
      where: {
        login: userData.login,
      },
      data: {
        lastLogin: new Date(),
        isOnline: false,
      },
    });
    return true;
  }

  async register(userData: RegisterUserDto): Promise<UserResponseDto> {
    let newUser = this.prismaService.user.create({
      data: {
        login: userData.login,
        password: userData.password,
        email: userData.email,
      },
    });
    return new UserResponseDto(newUser);
  }

  async forgotPassword(userData: ForgotPasswordDto): Promise<UserResponseDto> {
    let user = await this.prismaService.user.update({
      where: {
        email: userData.email,
      },
      data: {
        password: userData.password,
      },
    });
    return new UserResponseDto(user);
  }

  async resetPassword(userData: ChangePasswordDto): Promise<UserResponseDto> {
    let user = this.prismaService.user.update({
      where: {
        login: userData.login,
        password: userData.password,
      },
      data: {
        password: userData.newPassword,
      },
    });
    return new UserResponseDto(user);
  }

  async changePassword(userData: ChangePasswordDto): Promise<UserResponseDto> {
    let user = this.prismaService.user.update({
      where: {
        login: userData.login,
        password: userData.password,
      },
      data: {
        password: userData.newPassword,
      },
    });
    return new UserResponseDto(user);
  }
}
