import type UserType from '#models/user'

import { AuthenticationUserInformationDbRepository } from '../../domain/repository/authentication_user_information_database_repository.js'
import { Authenticator } from '@adonisjs/auth'
import { Authenticators } from '@adonisjs/auth/types'

export class AuthUserInfoDbRepository implements AuthenticationUserInformationDbRepository {
  async getAuthenticatedUserInformation(auth: Authenticator<Authenticators>): Promise<UserType> {
    await auth.check()
    const user = auth.user
    return user as UserType
  }
}
