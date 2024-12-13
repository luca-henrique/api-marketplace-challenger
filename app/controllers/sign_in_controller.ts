import type { HttpContext } from '@adonisjs/core/http'
import { SignInCredentialsUseCase } from '../../domain/usecases/sign_in_credentials.js'
import { SignInCredentialsService } from '../../infra/repository/sign_in_credentials.js'
import { signInValidator } from '#validators/sign_in'

export default class SignInsController {
  private readonly auth = new SignInCredentialsUseCase(new SignInCredentialsService())

  public async handle({ request, response }: HttpContext) {
    const { password, email } = request.all()

    await signInValidator.validate({ password, email })

    const token = await this.auth.execute(email, password)

    return response.json(token)
  }
}
