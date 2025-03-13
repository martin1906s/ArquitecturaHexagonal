import { Pool } from "pg";
import { Users } from "../domain/Users";
import { UserDateCreate } from "../domain/UserDateCreate";
import { UserId } from "../domain/UserId";
import { UserLastName } from "../domain/UserLastName";
import { UserMail } from "../domain/UserMail";
import { UserName } from "../domain/UserName";
import { UserTelephone } from "../domain/UserTelephone";

type PostgresUSer={
    id: string,
    name: string,
    lastname: string,
    mail: string,
    telephone: string,
    datecreate: Date
}

export class PostgreSQLUserRepository {
    client: Pool;
    constructor(databaseURL: string) {
        this.client = new Pool({
            connectionString: databaseURL
        });
    };
    async create(user: Users): Promise<void> {
        const query = {
            text: 'INSERT INTO users(id, name, lastname, mail, telephone, datecreate) VALUES($1, $2, $3, $4, $5, $6)',
            values: [user.id.value, user.name.value, user.lastName.value, user.mail.value, user.telephone.value, user.dateCreate.value]
        }
        await this.client.query(query)
    }
    async getAll(): Promise<Users[]> {
        const query = {
            text: 'SELECT * FROM users',
        }
        const result = await this.client.query<PostgresUSer>(query)
        return result.rows.map((row) => {
            return new Users(
                new UserId(row.id),
                new UserName(row.name),
                new UserLastName(row.lastname),
                new UserMail(row.mail),
                new UserTelephone(row.telephone),
                new UserDateCreate(row.datecreate)   
            )
        })
    }
}