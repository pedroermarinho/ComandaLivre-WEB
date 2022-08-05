import { UserRepository } from "../../Repository/Index";
import { User } from "../../Entities/Index";

class GetUsers {
    constructor(private userRepository: UserRepository) {}

    async execute(): Promise<User[]> {
        return this.userRepository.getUsers();
    }
}