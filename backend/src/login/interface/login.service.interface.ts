import { UserCredentials } from '../dto/login.dto';
import UserResponseDto from '../dto/login.response.dto';

export default interface LoginServiceInterface {
  login(userData: UserCredentials): Promise<UserResponseDto>;
  logout(userData: UserCredentials): Promise<boolean>;
  register(userData: UserCredentials): Promise<UserResponseDto>;
  forgotPassword(userData: UserCredentials): Promise<UserResponseDto>;
  resetPassword(userData: UserCredentials): Promise<UserResponseDto>;
  changePassword(userData: UserCredentials): Promise<UserResponseDto>;
}
