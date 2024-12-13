import { UserRepository } from '../../domain/repository/user_repository.js'

import User from '#models/user'
import type UserType from '#models/user'

import { User as EntityUser } from '../../domain/entity/user.js'

export class DbUserRepository implements UserRepository {
  async save(user: EntityUser): Promise<UserType | null> {
    const createdUser = await User.create(user)
    return createdUser || null
  }

  async findById(id: number): Promise<UserType | null> {
    const findUser = await User.findBy({ id })

    return findUser || null
  }
}
