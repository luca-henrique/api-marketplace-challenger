import Product from '#models/product'
import { listProductQueryParamsValidator } from '#validators/list_product'
import type { HttpContext } from '@adonisjs/core/http'

export default class ListProductsController {
  async handle({ request, response }: HttpContext) {
    const page = Number(request.qs().page || 1)
    const limit = Number(request.qs().limit || 5)
    const price = Number(request.qs().price || null)
    const search = request.qs().search || null
    const category = request.qs().category || null
    const orderBy = request.qs().orderBy || 'asc'

    const visits = request.qs().visits || null

    await listProductQueryParamsValidator.validate({ page, limit, price, search, category })

    const products = await Product.query()
      .where((builder) => {
        if (search) {
          builder.whereRaw('LOWER(name) LIKE ?', [`%${search.toLowerCase()}%`])
        }
        if (price) {
          builder.whereBetween('price', [0, price])
        }

        if (visits) {
          builder.where('visits', '>', visits)
        }
      })
      .preload('category')
      .preload('market')
      .orderBy('price', orderBy)
      .paginate(+page, +limit)

    return response.ok(products)
  }
}
