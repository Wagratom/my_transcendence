import { Body, Controller, Get, Query, Req } from '@nestjs/common';
import UserSearchDto from './dto/users.dto';
import { UsersService } from './users.service';
import { Request } from 'express';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get('getProfile')
	async getProfile(
		@Req() req: Request
	) {
		return await this.usersService.getProfile(req);
	}
}
