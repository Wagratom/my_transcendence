import { UserCredentials } from '../dto/login.dto';
import { LoginDefaultResponseDto, LoginAuthResponseDto } from '../dto/login.response.dto';

export default interface LoginServiceInterface {
  login(userData: UserCredentials): Promise<LoginAuthResponseDto>;
  logout(userData: UserCredentials): Promise<boolean>;
  register(userData: UserCredentials): Promise<LoginDefaultResponseDto>;
  forgotPassword(userData: UserCredentials): Promise<LoginDefaultResponseDto>;
  resetPassword(userData: UserCredentials): Promise<LoginDefaultResponseDto>;
  changePassword(userData: UserCredentials): Promise<LoginDefaultResponseDto>;
}
