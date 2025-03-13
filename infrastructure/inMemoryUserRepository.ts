import { UserId } from "../domain/UserId";
import { UserRepository } from "../domain/UserRepository";
import { Users } from "../domain/Users";

export class inMemoryUserRepository implements UserRepository {
    getAll(): Promise<Users[]> {
        return Promise.resolve(this.user);
    }
    private user: Users[]= [];
    async create(user: Users): Promise<void> {
        this.user.push(user);
    }
    async gerAll(): Promise<Users[]> {
        return this.user;
    }
    async getOneByID(id: UserId): Promise<Users | null> {
        return this.user.find(user => user.id.value === id.value)|| null;
    }
    async edit(user: Users): Promise<void> {
        const index = this.user.findIndex((u) => u.id.value === user.id.value);
        this.user[index] = user;
    }
    async delete(id: UserId): Promise<void> {
        this.user = this.user.filter((user) => user.id.value !== id.value);
    }
}
    