import { UsersResponseDto } from "../dto/users.response.dto";
import { Request } from 'express';
import { Multer } from 'multer';

export interface UsersServiceInterface {
	getProfile(red: Request): Promise<UsersResponseDto>;
	getPhoto(username: string): Promise<Buffer | void>;
	getAllPlayers(): Promise<UsersResponseDto[]>;
	getFriendsPlayer(username: string): Promise<UsersResponseDto[]>;
	getFriendRequests(req: Request): Promise<UsersResponseDto[]>;

	updateProfile(red: Request, nickname: string, file: Multer.file): Promise<UsersResponseDto | void>;
	addFriend(req: Request, username: string): Promise<void>;
	deleteFriend(req: Request, username: string): Promise<void>;
}
