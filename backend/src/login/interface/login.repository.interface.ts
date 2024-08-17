import { User } from '@prisma/client';
import {
  ChangePasswordDto,
  ForgotPasswordDto,
  RegisterUserDto,
  UserCredentials,
} from '../dto/login.dto';
import { LoginDefaultResponseDto } from '../dto/login.response.dto';
import { StatusFriendship } from '@prisma/client';

export default interface LoginRepositoryInterface {
  findUser(login: string): Promise<User>;
  logout(userData: UserCredentials): Promise<boolean>;
  register(userData: RegisterUserDto): Promise<LoginDefaultResponseDto>;
  forgotPassword(userData: ForgotPasswordDto): Promise<LoginDefaultResponseDto>;
  changePassword(userData: ChangePasswordDto): Promise<LoginDefaultResponseDto>;
  updateStatusOnline(userID: number, status: boolean): Promise<void>
}
