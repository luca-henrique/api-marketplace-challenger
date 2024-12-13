import User from '#models/user'

import { SignInCredentialsRepository } from '../../domain/repository/sign_in_credentials_repository.js'
import { AccessToken } from '@adonisjs/auth/access_tokens'

export class SignInCredentialsService implements SignInCredentialsRepository {
  async signInCredentials(email: string, password: string): Promise<AccessToken> {
    const user = await User.verifyCredentials(email, password)

    if (!user) {
      throw new Error()
    }

    return await User.accessTokens.create(user)
  }
}
