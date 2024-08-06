import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersServiceInterface } from './interface/users.service.interface';
import { UsersResponseDto } from './dto/users.response.dto';
import UsersRepository from './users.repository';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { Multer } from 'multer';

import * as fs from 'fs';
import * as path from 'path';


@Injectable()
export class UsersService implements UsersServiceInterface {
	constructor(
		private readonly prismaService: UsersRepository,
		private readonly jwtService: JwtService
	) { }

	async getUsersByJwt(jwt: string): Promise<UsersResponseDto> {
		try {
			const payload = await this.jwtService.verifyAsync(jwt, { secret: process.env.JWT_SECRET });
			let user = await this.prismaService.findUser(payload.username);
			if (user) {
				return new UsersResponseDto(user);
			}
			throw new UnauthorizedException('User not found');
		}
		catch (e) {
			throw new UnauthorizedException('Invalid token. Please login again');
		}
	}

	async getJWT(req: Request): Promise<string> {
		const jwt = req.cookies['jwt'];
		if (!jwt) {
			throw new UnauthorizedException('Invalid token. Please login again');
		}
		return jwt;
	}

	async getProfile(req: Request): Promise<UsersResponseDto> {
		const jwt = await this.getJWT(req);
		return await this.getUsersByJwt(jwt);
	}

	async uploadPhoto(photo: Multer.File, username: string): Promise<string> {
		const photoPath = path.resolve(process.env.PHOTO_PATH, username);
		if (!photo) {
			throw new UnauthorizedException('No photo found');
		}
		fs.writeFileSync(photoPath, photo.buffer);
		return photoPath[0] === '/' ? `/api/users${photoPath}` : `/api/users/${photoPath}`;
	}

	async updateProfile(req: Request, nickname: string, photo: Multer.file): Promise<UsersResponseDto | void> {
		const jwt = await this.getJWT(req);
		let update = {
			username: (await this.getUsersByJwt(jwt)).username
		}
		if (!nickname && !photo) return
		if (photo) {
			update['photo'] = await this.uploadPhoto(photo, update.username);
		}
		if (nickname) {
			update['nickname'] = nickname;
		}
		return await this.prismaService.updateUser(update);
	}

	async getPhoto(username: string): Promise<Buffer | void> {
		const photoPath = path.resolve(process.env.PHOTO_PATH, username);
		if (fs.existsSync(photoPath)) {
			try {
				const photoBuffer = await fs.promises.readFile(photoPath);
				return photoBuffer;
			} catch (err) {
				throw new UnauthorizedException('Error opening file');
			}
		} else {
			throw new NotFoundException('File does not exist');
		}
	}

}
