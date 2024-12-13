import { AccessToken } from '@adonisjs/auth/access_tokens'
import { SignInCredentialsRepository } from '../repository/sign_in_credentials_repository.js'

export class SignInCredentialsUseCase {
  constructor(private readonly signInCredentialsRepository: SignInCredentialsRepository) {}

  async execute(email: string, password: string): Promise<AccessToken> {
    return await this.signInCredentialsRepository.signInCredentials(email, password)
  }
}
