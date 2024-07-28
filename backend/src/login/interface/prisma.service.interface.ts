import {
  ChangePasswordDto,
  ForgotPasswordDto,
  RegisterUserDto,
  UserCredentials,
} from '../dto/login.dto';
import UserResponseDto from '../dto/login.response.dto';

export default interface LoginRepositoryInterface {
  findUser(userData: UserCredentials): Promise<UserResponseDto>;
  login(userData: UserCredentials): Promise<UserResponseDto>;
  logout(userData: UserCredentials): Promise<boolean>;
  register(userData: RegisterUserDto): Promise<UserResponseDto>;
  forgotPassword(userData: ForgotPasswordDto): Promise<UserResponseDto>;
  changePassword(userData: ChangePasswordDto): Promise<UserResponseDto>;
}
