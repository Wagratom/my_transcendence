import { PrismaService } from "src/PrismaDB/prisma.connect";
import UserRepositoryInterface from "./interface/user.repository.interface";
import { Friendship, User } from "@prisma/client";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
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

	async getAllUsers(): Promise<User[]> {
		let users = await this.prismaService.user.findMany();
		return users;
	}

	async getFriendsUser(username: string): Promise<User[]> {
		const user = await this.prismaService.user.findUnique({
			where: {
				login: username,
			},
			include: {
				sentRequests: {
					where: {
						status: StatusFriendship.ACCEPTED,
					},
					include: {
						receivedRequests: true,
					},
				},
				receivedRequests: {
					where: {
						status: StatusFriendship.ACCEPTED,
					},
					include: {
						sentRequests: true,
					},
				},
			},
		});

		if (!user) {
			throw new Error('User not found');
		}

		const sentFriends = user.sentRequests.map(friendship => friendship.receivedRequests);
		const receivedFriends = user.receivedRequests.map(friendship => friendship.sentRequests);

		const friends = sentFriends.concat(receivedFriends);
		return friends;
	}

	async getFriendRequests(username: string): Promise<User[]> {
		const user = await this.prismaService.user.findUnique({
			where: {
				login: username
			},
			include: {
				sentRequests: {
					where: {
						status: StatusFriendship.PENDING
					},
					include: {
						receivedRequests: true
					}
				},
				receivedRequests: {
					where: {
						status: StatusFriendship.PENDING
					},
					include: {
						sentRequests: true
					}
				}
			}
		})
		const sentFriendRequests = user.sentRequests.map(request => request.receivedRequests);
		const receivedFriendRequests = user.receivedRequests.map(request => request.sentRequests);

		return [...sentFriendRequests, ...receivedFriendRequests];

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

	async getFriendship(sendID: number, friendID: number): Promise<Friendship | null> {
		return await this.prismaService.friendship.findFirst({
			where: {
				OR: [
					{
						sentRequestsId: sendID,
						receivedRequestsId: friendID
					},
					{
					sentRequestsId: friendID,
					receivedRequestsId: sendID
					}
				]
			}
		})
	}

	async createNewFriendship(sendID: number, friendID: number): Promise<void>{
		await this.prismaService.friendship.create({
			data: {
					sentRequestsId: sendID,
					receivedRequestsId: friendID,
					status: StatusFriendship.ACCEPTED
				}
		})
	}

	async updateStatusFriendship(id: number, status: StatusFriendship): Promise<void>{
		await this.prismaService.friendship.update({
			where: {
				id: id
			},
			data: {
				status: status
			}
		})
	}

	async addFriend(sendID: number, friendID: number): Promise<void> {
		try {
			let friendship = await this.getFriendship(sendID, friendID);
			if (friendship) {
				await this.updateStatusFriendship(friendship.id, StatusFriendship.ACCEPTED);
			} else {
				await this.createNewFriendship(sendID, friendID);
			}
		} catch (error) {
			throw new InternalServerErrorException("Error: Unable to add friend")
		}
	}
}
