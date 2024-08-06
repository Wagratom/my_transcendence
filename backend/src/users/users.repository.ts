import { PrismaService } from "src/PrismaDB/prisma.connect";
import UserRepositoryInterface from "./interface/user.repository.interface";
import { User } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { Multer } from "multer";
import { UsersResponseDto } from "./dto/users.response.dto";

@Injectable()
export default class UsersRepository implements UserRepositoryInterface {
	constructor(private readonly prismaService: PrismaService) { }

	async findUser(username: string): Promise<User> {
		let user = await this.prismaService.user.findUnique({
			where: {
				login: username
			}
		});
		return user;
	}

	async updateUser(updateData: { username: string, nickname?: string; photo?: string }): Promise<UsersResponseDto> {
		let user = await this.prismaService.user.update({
			where: {
				login: updateData.username
			},
			data: {
				nickname: updateData.nickname,
				avatar: updateData.photo
			}
		});
		return new UsersResponseDto(user);
	}
}
