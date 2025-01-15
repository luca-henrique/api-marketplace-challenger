import type { HttpContext } from '@adonisjs/core/http'
import Category from '#models/category'

export default class GetCategoriesController {
  async handle({ response, request }: HttpContext) {
    try {
      const page = Number(request.qs().page || 1)
      const limit = Number(request.qs().limit || 12)
      const category = request.qs().category || null

      const categories = await Category.query()
        .where((builder) => {
          if (category) {
            builder.whereRaw('LOWER(name) LIKE ?', [`%${category.toLowerCase()}%`])
          }
        })
        .paginate(+page, +limit)

      return response.json(categories)
    } catch (error) {
      return response.badRequest({
        type: 'Error',
        message: 'Não foi possível consultar categorias',
        error,
      })
    }
  }
}
