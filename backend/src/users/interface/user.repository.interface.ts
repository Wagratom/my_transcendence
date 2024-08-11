import { User } from "@prisma/client";
import { Multer } from "multer";
import { UsersResponseDto } from "../dto/users.response.dto";

export default interface UserRepositoryInterface {
  findUser(username: string): Promise<User>;
  getAllUsers(): Promise<User[]>;
  getFriendsUser(username: string): Promise<User[]>;
  updateUser(updateData: {nickname?: string, file?: Multer.file}): Promise<UsersResponseDto>;
  addFriend(sendID: number, friendID: number): Promise<void>;
}
