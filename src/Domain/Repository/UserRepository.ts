import {User} from "../Entities/Index";

export interface UserRepository {
    getUser(id: String): Promise<User>;
    getUsers(): Promise<User[]>;
    createUser(user: User): Promise<User>;
    updateUser(user: User): Promise<User>;
}