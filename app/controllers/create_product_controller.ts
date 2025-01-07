import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'
import { createProductValidation } from '#validators/product'

import supabase from '#config/supabase'
import fs from 'node:fs'
import path from 'node:path'

import { randomUUID } from 'node:crypto'

export default class CreateProductsController {
  async handle({ request, response }: HttpContext) {
    const { name, description, price, stock, marketId, categoryId } = request.all()

    const imageFile = await request.file('image')

    if (!imageFile) {
      return response.badRequest({
        type: 'Error',
        message: 'Imagem não foi passada',
      })
    }

    if (!imageFile.tmpPath) {
      return response.badRequest({
        type: 'Error',
        message: 'tmpPath da imagem não foi passada',
      })
    }

    const filePath = path.resolve(imageFile.tmpPath)
    const fileBuffer = fs.readFileSync(filePath)

    const fileType = imageFile.extname
    const fileName = `${randomUUID()}.${fileType}`

    const subPath = `products/${fileName}`

    const contentType = `image/${fileType}`

    await supabase.storage.from('images').upload(subPath, fileBuffer, {
      contentType: contentType,
      cacheControl: '3600',
      upsert: false,
    })

    const { data } = supabase.storage.from('images').getPublicUrl(subPath)

    await createProductValidation.validate({
      name,
      description,
      image: data.publicUrl,
      price,
      stock,
      marketId,
      categoryId,
    })

    const product = await Product.create({
      name,
      description,
      image: data.publicUrl,
      price,
      stock,
      marketId: marketId,
      categoryId: categoryId,
    })

    return response.json({ product })
  }
}
