import { UserRepository } from "../../domain/UserRepository";
import { Users } from "../../domain/Users";

export class UserGetAll{
    constructor(private repository: UserRepository){}

    async run(): Promise<Users[]>{
        return this.repository.getAll()
    }

}