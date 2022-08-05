import { UserRepository } from "../../Repository/Index";
import { User } from "../../Entities/Index";

class UpdateUser {
    constructor(private userRepository: UserRepository) {}

    async execute(user: User): Promise<User> {
        return this.userRepository.updateUser(user);
    }
}