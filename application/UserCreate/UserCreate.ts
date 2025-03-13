import { UserDateCreate } from "../../domain/UserDateCreate";
import { UserId } from "../../domain/UserId";
import { UserLastName } from "../../domain/UserLastName";
import { UserMail } from "../../domain/UserMail";
import { UserName } from "../../domain/UserName";
import { UserRepository } from "../../domain/UserRepository";
import { Users } from "../../domain/Users";
import { UserTelephone } from "../../domain/UserTelephone";


export class UserCreate{
    constructor(private repository: UserRepository){}
    
    async run(id:string, name:string, lastName:string, mail:string, telephone: string,dateCreate:Date): Promise<void>{
        const user = new Users(
            new UserId(id),
            new UserName(name),
            new UserLastName(lastName),
            new UserMail(mail),
            new UserTelephone(telephone),
            new UserDateCreate(dateCreate)
        );
        return this.repository.create(user)
    }
}