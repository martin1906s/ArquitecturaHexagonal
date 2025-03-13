import { UserId } from "../../domain/UserId";
import { UserNotFoundError } from "../../domain/UserNotFoundError";
import { UserRepository } from "../../domain/UserRepository";
import { Users } from "../../domain/Users";

export class UserGetOneById{
    constructor(private repository: UserRepository){}

    async run(id: string): Promise<Users>{
        const user= await this.repository.getOneByID(new UserId(id))

        if (!user) throw new UserNotFoundError("User not found");
        return user;
    }
}