import { IsEmail, IsNotEmpty } from 'class-validator';

//Nao null
export class UserCredentials {
  @IsNotEmpty({ message: 'Login cannot be empty' })
  login: string;

  @IsNotEmpty({ message: 'Password cannot be empty' })
  password: string;
}

export class RegisterUserDto extends UserCredentials {
  @IsEmail({}, { message: 'Invalid email' })
  email: string;
}

export class ChangePasswordDto extends UserCredentials {
  @IsNotEmpty({ message: 'New password cannot be empty' })
  newPassword: string;
}

export class ForgotPasswordDto extends UserCredentials {
  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @IsNotEmpty()
  newPassword: string;
}
