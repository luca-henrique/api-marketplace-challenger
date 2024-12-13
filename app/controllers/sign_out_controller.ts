import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class SignOutsController {
  async handle({ auth }: HttpContext) {
    const user = auth.user!
    await User.accessTokens.delete(user, user.currentAccessToken.identifier)
    return { message: 'success' }
  }
}
