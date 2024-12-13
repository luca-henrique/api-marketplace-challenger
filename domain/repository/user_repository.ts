import type UserType from '#models/user'
import { User } from '../entity/user.js'

export interface UserRepository {
  save(user: User): Promise<UserType | null>
  findById(id: number): Promise<UserType | null>
}
