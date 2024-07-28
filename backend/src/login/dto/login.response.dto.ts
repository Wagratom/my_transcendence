import { User } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class LoginDefaultResponseDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  nickname: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  avatar: string;

  constructor(user: User) {
    this.username = user.login;
    this.nickname = user.nickname;
    this.email = user.email;
    this.avatar = user.avatar;
  }

}


export class LoginAuthResponseDto extends LoginDefaultResponseDto {
  @IsNotEmpty()
  token: string;


  constructor(user: User, token: string) {
    super(user);
    this.token = token;
  }
}
