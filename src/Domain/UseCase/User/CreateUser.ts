import { UserRepository } from "../../Repository/Index";
import { User } from "../../Entities/User";

class CreateUser  {
    constructor(private userRepository: UserRepository) {}

    async execute(user: User): Promise<User> {
        return this.userRepository.createUser(user);
    }
}