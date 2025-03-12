import { UserDateOfBrith } from "./UserDateOfBrith";
import { UserId } from "./UserId";
import { UserLastName } from "./UserLastName";
import { UserMail } from "./UserMail";
import { UserName } from "./UserName";
import { UserTelephone } from "./UserTelephone";

export class Users {
    id: UserId;
    name: UserName;
    lastName: UserLastName;
    mail: UserMail;
    telephone: UserTelephone;
    dateOfBirth: UserDateOfBrith;

    constructor(id: UserId, name: UserName, lastName: UserLastName, mail: UserMail, telephone: UserTelephone, dateOfBirth: UserDateOfBrith) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.mail = mail;
        this.telephone = telephone;
        this.dateOfBirth = dateOfBirth;
    }

}