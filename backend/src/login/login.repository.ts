import { Injectable } from '@nestjs/common';
import LoginRepositoryInterface from './interface/login.repository.interface';
import {
  ChangePasswordDto,
  ForgotPasswordDto,
  RegisterUserDto,
  UserCredentials,
} from './dto/login.dto';
import { LoginDefaultResponseDto } from './dto/login.response.dto';
import { PrismaService } from 'src/PrismaDB/prisma.connect';
import { StatusFriendship, User } from '@prisma/client';

@Injectable()
export default class LoginRepository implements LoginRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) { }

  async findUser(login: string): Promise<User> {
    let user = await this.prismaService.user.findUnique({
      where: {
        login: login,
      },
    });

    return user
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

  async register(userData: RegisterUserDto): Promise<LoginDefaultResponseDto> {
    let newUser = await this.prismaService.user.create({
      data: {
        login: userData.login,
        password: userData.password,
        email: userData.email,
        nickname: userData.login,
      },
    });
    return new LoginDefaultResponseDto(newUser);
  }

  async forgotPassword(userData: ForgotPasswordDto): Promise<LoginDefaultResponseDto> {
    let user = await this.prismaService.user.update({
      where: {
        email: userData.email,
      },
      data: {
        password: userData.password,
      },
    });
    return new LoginDefaultResponseDto(user);
  }

  async resetPassword(userData: ChangePasswordDto): Promise<LoginDefaultResponseDto> {
    let user = await this.prismaService.user.update({
      where: {
        login: userData.login,
        password: userData.password,
      },
      data: {
        password: userData.newPassword,
      },
    });
    return new LoginDefaultResponseDto(user);
  }

  async changePassword(userData: ChangePasswordDto): Promise<LoginDefaultResponseDto> {
    let user = await this.prismaService.user.update({
      where: {
        login: userData.login,
        password: userData.password,
      },
      data: {
        password: userData.newPassword,
      },
    });
    return new LoginDefaultResponseDto(user);
  }

  async updateStatusOnline(userID: number, status: boolean): Promise<void> {
    await this.prismaService.user.update({
      where: {
        id: userID,
      },
      data: {
        isOnline: status
      },
    })
  }
}
