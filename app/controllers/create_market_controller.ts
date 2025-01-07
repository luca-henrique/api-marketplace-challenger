import { HttpContext } from '@adonisjs/core/http'

import Market from '#models/market'

export default class CreateMarketsController {
  async handle({ request, response, auth }: HttpContext) {
    try {
      const { name, addressId } = request.all()

      const user = await auth.authenticate()

      const marketCreate = await Market.create({ name, user_id: user.id, address_id: addressId })

      response.ok({ ...marketCreate })
    } catch (error) {
      return response.badRequest({
        type: 'Error',
        message: 'Não foi consultar produtos',
        error,
      })
    }
  }
}
