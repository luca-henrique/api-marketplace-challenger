import type { HttpContext } from '@adonisjs/core/http'
import Category from '#models/category'

export default class GetCategoriesController {
  async handle({ response, request }: HttpContext) {
    try {
      const page = Number(request.qs().page || 1)
      const limit = Number(request.qs().limit || 11)
      const category = request.qs().category || null

      const categories = await Category.all()
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
