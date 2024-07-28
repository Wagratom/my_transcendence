import { User } from '@prisma/client';
import {
  ChangePasswordDto,
  ForgotPasswordDto,
  RegisterUserDto,
  UserCredentials,
} from '../dto/login.dto';
import { LoginDefaultResponseDto } from '../dto/login.response.dto';

export default interface LoginRepositoryInterface {
  findUser(login: string, password: string): Promise<User>;
  login(userData: UserCredentials): Promise<LoginDefaultResponseDto>;
  logout(userData: UserCredentials): Promise<boolean>;
  register(userData: RegisterUserDto): Promise<LoginDefaultResponseDto>;
  forgotPassword(userData: ForgotPasswordDto): Promise<LoginDefaultResponseDto>;
  changePassword(userData: ChangePasswordDto): Promise<LoginDefaultResponseDto>;
}
