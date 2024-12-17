import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class ListAddressByUsersController {
  async handle({ request, response, auth }: HttpContext) {
    const user = await auth.authenticate()

    if (user) {
      const address = await User.query().where('id', user.id).preload('address').first()
      response.json(address)
    }
  }
}
