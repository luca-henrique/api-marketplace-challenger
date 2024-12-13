import { UserRepository } from '../../domain/repository/user_repository.js'
import type UserType from '#models/user'

export class InMemoryUserRepository implements UserRepository {
  private readonly users: UserType[] = []

  async save(user: UserType): Promise<void> {
    this.users.push(user)
  }

  async findById(id: number): Promise<UserType | null> {
    return this.users.find((user) => user.id === id) || null
  }
}
