import { IsNotEmpty } from 'class-validator';

export default class UserResponseDto {

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  nickname: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  avatar: string;


  constructor(user: any) {
    this.username = user.username;
    this.nickname = user.nickname;
    this.email = user.email;
    this.avatar = user.avatar;
  }
}
