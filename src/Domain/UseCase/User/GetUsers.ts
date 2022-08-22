import { UserRepository } from "../../Repository/Index";
import { User } from "../../Entities/User";

class GetUsers {
    constructor(private userRepository: UserRepository) {}

    async execute(): Promise<User[]> {
        return this.userRepository.getUsers();
    }
}