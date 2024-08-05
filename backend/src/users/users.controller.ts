import { Body, Controller, Get, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request } from 'express';
import { UploadPhoto } from './dto/users.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer';
import { UsersResponseDto } from './dto/users.response.dto';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) { }

	@Get('getProfile')
	async getProfile(@Req() req: Request) {
		return await this.usersService.getProfile(req);
	}

	@Post('updateProfile')
	@UseInterceptors(FileInterceptor('avatar'))
	async updateProfile(
		@UploadedFile() file: Multer.File,
		@Body() body: UploadPhoto,
		@Req() req: Request
	) : Promise<UsersResponseDto | void> {
		return await this.usersService.updateProfile(req, body.nickname, file);
	}
}
