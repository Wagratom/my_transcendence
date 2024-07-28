import { IsNotEmpty } from "class-validator";

export default class UserSearchDto {
	@IsNotEmpty()
	username: string;
}
