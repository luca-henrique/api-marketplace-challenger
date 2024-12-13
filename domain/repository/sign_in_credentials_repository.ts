import { AccessToken } from '@adonisjs/auth/access_tokens'

export interface SignInCredentialsRepository {
  signInCredentials(email: string, password: string): Promise<AccessToken>
}
