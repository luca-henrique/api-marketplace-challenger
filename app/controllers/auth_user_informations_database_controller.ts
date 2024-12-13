import type { HttpContext } from '@adonisjs/core/http'
import { AuthenticationUserInformationDatabaseUseCase } from '../../domain/usecases/authentication_user_information_database.js'
import { AuthUserInfoDbRepository } from '../../infra/repository/authentication_user_information.js'

export default class AuthUserInformationsController {
  private readonly authUserInfoDbUseCase = new AuthenticationUserInformationDatabaseUseCase(
    new AuthUserInfoDbRepository()
  )

  async handle({ auth }: HttpContext) {
    return await this.authUserInfoDbUseCase.execute(auth)
  }
}
