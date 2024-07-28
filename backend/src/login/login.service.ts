import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import LoginServiceInterface from './interface/login.service.interface';
import {
  ChangePasswordDto,
  ForgotPasswordDto,
  RegisterUserDto,
  UserCredentials,
} from './dto/login.dto';
import UserResponseDto from './dto/login.response.dto';
import LoginRepository from './login.repository';

@Injectable()
export class LoginService implements LoginServiceInterface {
  constructor(private readonly prismaService: LoginRepository) {}

  async login(userData: UserCredentials): Promise<UserResponseDto> {
    let user = await this.prismaService.findUser(userData);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return  user
  }

  async logout(userData: UserCredentials): Promise<boolean> {
    return this.prismaService.logout(userData);
  }

  async register(userData: RegisterUserDto): Promise<UserResponseDto> {
    let user = await this.prismaService.findUser(userData)
    if (user) {
      throw new ConflictException('User already exist')
    }
    return new  UserResponseDto(await this.prismaService.register(userData));
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
