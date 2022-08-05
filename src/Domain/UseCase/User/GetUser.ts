import { UserRepository } from "../../Repository/Index";
import { User } from "../../Entities/Index";

class CreateUser  {
    constructor(private userRepository: UserRepository) {}

    async execute(id: String): Promise<User> {
        return this.userRepository.getUser(id);
    }
}