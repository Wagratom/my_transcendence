import UserSearchDto from "../dto/users.dto";
import { UsersResponseDto } from "../dto/users.response.dto";

export interface UsersServiceInterface {
	getProfile(body: UserSearchDto): Promise<UsersResponseDto>;
}
