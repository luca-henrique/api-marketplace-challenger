import Category from '#models/category'
import type { HttpContext } from '@adonisjs/core/http'

export default class GetProductByCategoriesController {
  async handle({ response, request }: HttpContext) {
    try {
      const page = Number(request.qs().page || 1)
      const limit = Number(request.qs().limit || 5)
      const price = Number(request.qs().price || null)
      const search = request.qs().search || null
      const orderBy = request.qs().orderBy || 'asc'
      const visits = request.qs().visits || null

      const category = request.param('category')

      const categories = await Category.query()
        .where((builder) => {
          if (category) {
            builder.whereRaw('LOWER(path) LIKE ?', [`%${category.toLowerCase()}%`])
          }
        })
        .preload('products')
        .paginate(+page, +limit)

      const parseToJson = categories.toJSON()

      const data = {
        meta: parseToJson.meta,
        data: parseToJson.data[0].products,
      }

      return response.json(data)
    } catch (error) {
      return response.badRequest({
        type: 'Error',
        message: 'Não foi possível consultar categorias',
        error,
      })
    }
  }
}
