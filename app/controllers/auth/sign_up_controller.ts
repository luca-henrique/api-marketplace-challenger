import type { HttpContext } from '@adonisjs/core/http'

import { createUserValidator } from '#validators/user'
import { CreateUserUseCase } from '../../../domain/usecases/create_user.js'
import { DbUserRepository } from '../../../infra/repository/db_user_repository.js'

export default class SignUpController {
  private readonly createUserUseCase = new CreateUserUseCase(new DbUserRepository())

  public async handle({ request, response }: HttpContext) {
    const { password, email, name } = request.all()

    await createUserValidator.validate({ password, email, name })

    const user = await this.createUserUseCase.execute(name, email, password)
    return response.created(user)
  }
}
