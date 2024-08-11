import { PrismaService } from "src/PrismaDB/prisma.connect";
import UserRepositoryInterface from "./interface/user.repository.interface";
import { User } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { UsersResponseDto } from "./dto/users.response.dto";
import { StatusFriendship } from "@prisma/client";


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

	async addFriend(sendID: number, friendID: number): Promise<void> {
		await this.prismaService.friendship.create({
			data: {
				sentRequestsId: sendID,
				receivedRequestsId: friendID,
				status: StatusFriendship.PENDING,
			}
		});
	}
}
