import { User } from "@prisma/client";
import { IsNotEmpty } from "class-validator";

export class UsersResponseDto {
	username: string;
	nickname: string;
	email: string;
	avatar: string;

	constructor(user: User) {
	  this.username = user.login;
	  this.nickname = user.nickname;
	  this.email = user.email;
	  this.avatar = user.avatar;
	}
  }
