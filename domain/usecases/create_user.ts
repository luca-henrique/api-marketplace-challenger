import { User } from '../entity/user.js'
import { UserRepository } from '../repository/user_repository.js'

import type UserType from '#models/user'

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(name: string, email: string, password: string): Promise<UserType | null> {
    const user = new User(name, email, password)
    const createUser = await this.userRepository.save(user)
    return createUser
  }
}
