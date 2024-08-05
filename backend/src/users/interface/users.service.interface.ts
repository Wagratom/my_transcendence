import { UsersResponseDto } from "../dto/users.response.dto";
import { Request } from 'express';
import { Multer } from 'multer';

export interface UsersServiceInterface {
	getProfile(red: Request): Promise<UsersResponseDto>;
	updateProfile(red: Request, nickname: string, file: Multer.file): Promise<UsersResponseDto | void>;
}
