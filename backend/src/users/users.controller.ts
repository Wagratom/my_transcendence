import { Body, Controller, Post } from '@nestjs/common';
import UserSearchDto from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post('getProfile')
	async getProfile(@Body() body: UserSearchDto) {
		return await this.usersService.getProfile(body);
	}
}
