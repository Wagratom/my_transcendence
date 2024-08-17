import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersServiceInterface } from './interface/users.service.interface';
import { UsersResponseDto } from './dto/users.response.dto';
import UsersRepository from './users.repository';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { Multer } from 'multer';

import * as fs from 'fs';
import * as path from 'path';
import { User } from '@prisma/client';


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
		const jwt: string = await this.getJWT(req);
		return await this.getUsersByJwt(jwt);
	}

	async uploadPhoto(photo: Multer.File, username: string): Promise<string> {
		if (!photo) {
			throw new UnauthorizedException('No photo found');
		}
		let photoName: string = photo.originalname.split('.')[0];
		const photoPath: string = path.resolve(process.env.PHOTO_PATH, `${photoName}${username}`);
		fs.writeFileSync(photoPath, photo.buffer);
		return photoPath[0] === '/' ? `/api/users${photoPath}` : `/api/users/${photoPath}`;
	}

	async updateProfile(req: Request, nickname: string, photo: Multer.file): Promise<UsersResponseDto | void> {
		if (!nickname && !photo) return

		const jwt: string = await this.getJWT(req);
		let update = {
			username: (await this.getUsersByJwt(jwt)).username
		}
		if (photo) {
			update['photo'] = await this.uploadPhoto(photo, update.username);
		}
		if (nickname) {
			update['nickname'] = nickname;
		}
		return await this.prismaService.updateUser(update);
	}

	async getPhoto(username: string): Promise<Buffer | void> {
		const photoPath: string = path.resolve(process.env.PHOTO_PATH, username);
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

	async getAllPlayers(): Promise<UsersResponseDto[]> {
		let users: User[] = await this.prismaService.getAllUsers();
		let response: UsersResponseDto[] = [];

		for (let i = 0; i < users.length; i++) {
			response[i] = new UsersResponseDto(users[i]);
		}
		return response;
	}

	async getFriendsPlayer(username: string): Promise<UsersResponseDto[]> {
		let friends: User[] = await this.prismaService.getFriendsUser(username);
		let response: UsersResponseDto[] = [];

		for (let i = 0; i < friends.length; i++) {
			response.push(new UsersResponseDto(friends[i]));
		}
		return response;
	}

	async getFriendRequests(req: Request): Promise<UsersResponseDto[]> {
		const user: UsersResponseDto = await this.getProfile(req)
		const requests = await this.prismaService.getFriendRequests(user.nickname)
		let response: UsersResponseDto[] = []
		for (let i = 0; i < requests.length; i++) {
			response.push(new UsersResponseDto(requests[i]))
		}
		return response
	}

	async addFriend(req: Request, username: string): Promise<void> {
		const jwt: string = await this.getJWT(req);
		const user: UsersResponseDto = await this.getUsersByJwt(jwt);
		const friend: User = await this.prismaService.findUser(username);
		if (!friend) {
			throw new NotFoundException('User not found');
		}
		await this.prismaService.addFriend(user.id, friend.id);
	}

	async deleteFriend(req: Request, username: string): Promise<void> {
		const jwt: string = await this.getJWT(req);
		const user: UsersResponseDto = await this.getUsersByJwt(jwt);
		const friend: User = await this.prismaService.findUser(username);
		if (!friend) {
			throw new NotFoundException('User not found');
		}
		await this.prismaService.deleteFriend(user.id, friend.id);
	}
}
