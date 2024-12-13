import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'
import { createProductValidation } from '#validators/product'

export default class CreateProductsController {
  async handle({ request, response, auth }: HttpContext) {
    const { name, description, image, price, category, stock } = request.all()

    const user = await auth.authenticate()

    await createProductValidation.validate({
      name,
      description,
      image,
      price,
      category,
      stock,
      userId: user.id,
    })

    const product = await Product.create({
      name,
      description,
      image,
      price,
      category,
      stock,
      userId: user.id,
    })

    return response.json({ product })
  }
}
