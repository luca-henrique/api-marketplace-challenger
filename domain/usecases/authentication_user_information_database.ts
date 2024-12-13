import type UserType from '#models/user'
import { Authenticator } from '@adonisjs/auth'
import { AuthenticationUserInformationDbRepository } from '../repository/authentication_user_information_database_repository.js'
import { Authenticators } from '@adonisjs/auth/types'

export class AuthenticationUserInformationDatabaseUseCase {
  constructor(private readonly authUserInfoDb: AuthenticationUserInformationDbRepository) {}

  async execute(auth: Authenticator<Authenticators>): Promise<UserType | null> {
    return await this.authUserInfoDb.getAuthenticatedUserInformation(auth)
  }
}
