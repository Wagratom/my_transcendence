import { IsNotEmpty, IsOptional } from "class-validator";

export default class UserSearchDto {
	@IsNotEmpty()
	username: string;
}

export class UploadPhoto {
	@IsOptional()
	nickname: string | undefined;
}
