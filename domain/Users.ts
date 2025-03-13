import { UserDateCreate } from "./UserDateCreate";
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
    dateCreate: UserDateCreate;

    constructor(id: UserId, name: UserName, lastName: UserLastName, mail: UserMail, telephone: UserTelephone, dateCreate: UserDateCreate) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.mail = mail;
        this.telephone = telephone;
        this.dateCreate = dateCreate;
    }

    public nameAndMail(){
        return this.name.value + ' ' + this.mail.value;
    }

}