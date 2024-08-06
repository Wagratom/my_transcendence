import { User } from "@prisma/client";

export class UsersResponseDto {
	username: string;
	nickname: string;
	email: string;
	avatar: string;
	status: boolean;

	constructor(user: User) {
	  this.username = user.login;
	  this.nickname = user.nickname;
	  this.email = user.email;
	  this.avatar = user.avatar;
	  this.status = user.isOnline;
	}
  }
