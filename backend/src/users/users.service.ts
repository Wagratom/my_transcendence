import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import UserSearchDto from './dto/users.dto';
import { UsersServiceInterface } from './interface/users.service.interface';
import { UsersResponseDto } from './dto/users.response.dto';
import UsersRepository from './users.repository';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService implements UsersServiceInterface {
	constructor(
		private readonly prismaService: UsersRepository,
		private readonly jwtService: JwtService
	) { }

	async getUsersByJwt(jwt: string) {
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

	async getProfile(req: Request): Promise<UsersResponseDto> {
		const jwt = req.cookies['jwt'];
		if (!jwt) {
			throw new UnauthorizedException('Invalid token. Please login again');
		}
		return await this.getUsersByJwt(jwt);
	}
}
