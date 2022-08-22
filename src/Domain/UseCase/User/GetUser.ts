import { UserRepository } from "../../Repository/Index";
import { User } from "../../Entities/User";

class CreateUser  {
    constructor(private userRepository: UserRepository) {}

    async execute(id: string): Promise<User> {
        return this.userRepository.getUser(id);
    }
}