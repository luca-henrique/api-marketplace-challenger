import type UserType from '#models/user'
import { Authenticator } from '@adonisjs/auth'
import { Authenticators } from '@adonisjs/auth/types'

export interface AuthenticationUserInformationDbRepository {
  getAuthenticatedUserInformation(auth: Authenticator<Authenticators>): Promise<UserType>
}
