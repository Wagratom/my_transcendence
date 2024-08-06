import { Body, Controller, Get, Param, Post, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request } from 'express';
import { UploadPhoto } from './dto/users.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer';
import { UsersResponseDto } from './dto/users.response.dto';
import { Response } from 'express';


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
	): Promise<UsersResponseDto | void> {
		return await this.usersService.updateProfile(req, body.nickname, file);
	}

	@Get('app/public/photos/:username')
	async getPhoto(
		@Param('username') username: string,
		@Res() res: Response

	): Promise<Buffer | void> {
		const photoBuffer = await this.usersService.getPhoto(username);
		res.setHeader('Content-Type', 'image/jpeg');
		res.send(photoBuffer);
		return photoBuffer;
	}
}
