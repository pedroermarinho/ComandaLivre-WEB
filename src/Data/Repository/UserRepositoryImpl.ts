import {api} from '../../Core/Services/Api/Index';
import { UserRepository } from "../../Domain/Repository/Index";
import { User } from "../../Domain/Entities/Index";

class UserRepositoryImpl implements UserRepository{
    async createUser(user: User): Promise<User> {
        const response = await api().post('/users', user);
        return response.data;
    }

    async getUser(id: String): Promise<User> {
        const response = await  api().get(`/users/${id}`);
        return response.data;
    }

    async getUsers(): Promise<User[]> {
        const response = await api().get('/users');
        return response.data;
    }

    async updateUser(user: User): Promise<User> {
        const response = await  api().put(`/users/${user.id}`, user);
        return response.data;
    }

}