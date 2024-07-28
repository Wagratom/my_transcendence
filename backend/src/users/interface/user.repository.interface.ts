import { User } from "@prisma/client";

export default interface UserRepositoryInterface {
  findUser(username: string): Promise<User>;
}
