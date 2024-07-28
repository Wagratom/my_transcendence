import { PrismaService } from "src/PrismaDB/prisma.connect";
import UserRepositoryInterface from "./interface/user.repository.interface";
import { User } from "@prisma/client";
import { Injectable } from "@nestjs/common";

@Injectable()
export default class UsersRepository implements UserRepositoryInterface{
	constructor(private readonly prismaService: PrismaService) {}

	async findUser(username: string): Promise<User> {
		let user = await this.prismaService.user.findUnique({
			where: {
				login: username
			}
		});
		return user;
	}
}
