import Order from '#models/order'
import type { HttpContext } from '@adonisjs/core/http'

export default class FindOrderByUserController {
  async handle({ request, response, auth }: HttpContext) {
    try {
      const {
        page = 1,
        limit = 5,
        price,
      } = request.only(['page', 'limit', 'category', 'price', 'search', 'field', 'direction'])

      const user = await auth.authenticate()

      const order = await Order.query()
        .where('user_id', user.id)
        .where((builder) => {
          if (price) {
            builder.whereBetween('price', [0, price])
          }
        })
        .preload('orderProducts', (orderProductsQuery) => {
          orderProductsQuery.preload('product') // Carregar os produtos relacionados
        })
        .preload('address')
        .paginate(page, limit)

      response.ok(order)
    } catch (error) {
      return response.badRequest({
        type: 'Error',
        message: 'Não foi consultar produtos',
        error,
      })
    }
  }
}
