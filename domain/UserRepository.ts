import { UserId } from './UserId';
import { Users } from './Users';

export interface UserRepository {
    create(user: Users): Promise<void>;
    getAll(): Promise<Users[]>;
    getOneByID(id: UserId): Promise<Users | null>;
    edit(user: Users): Promise<void>;
    delete(id: UserId): Promise<void>;
}
