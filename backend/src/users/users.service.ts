import { Injectable, NotFoundException } from '@nestjs/common';
import UserSearchDto from './dto/users.dto';
import { UsersServiceInterface } from './interface/users.service.interface';
import { UsersResponseDto } from './dto/users.response.dto';
import UsersRepository from './users.repository';

@Injectable()
export class UsersService implements UsersServiceInterface {
	constructor(private readonly prismaService: UsersRepository) {}

	async getProfile(body: UserSearchDto): Promise<UsersResponseDto> {
		let user = await this.prismaService.findUser(body.username);
		if (user) {
			return new UsersResponseDto(user);
		}
		throw new NotFoundException('User not found');
	}
}
