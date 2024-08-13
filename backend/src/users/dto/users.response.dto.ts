import { User } from "@prisma/client";

export class UsersResponseDto {
	id: number;
	username: string;
	nickname: string;
	email: string;
	avatar: string;
	isOnline: boolean;

	constructor(user: User) {
	  this.id = user.id
	  this.username = user.login;
	  this.nickname = user.nickname;
	  this.email = user.email;
	  this.avatar = user.avatar;
	  this.isOnline = user.isOnline;
	}
  }
