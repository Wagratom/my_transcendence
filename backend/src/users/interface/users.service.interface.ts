import UserSearchDto from "../dto/users.dto";
import { UsersResponseDto } from "../dto/users.response.dto";
import { Request } from 'express';


export interface UsersServiceInterface {
	getProfile(red: Request): Promise<UsersResponseDto>;
}
