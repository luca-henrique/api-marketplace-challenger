import Order from '#models/order'
import OrderProduct from '#models/order_product'
import Product from '#models/product'
import { createOrderValidation, updateOrderWithPartialAttributes } from '#validators/order'
import { createOrderProductValidation } from '#validators/order_product'
import type { HttpContext } from '@adonisjs/core/http'

interface ProductProps {
  id_product: number
  quantity: number
}

export default class CreateOrderController {
  async handle({ request, response, auth }: HttpContext) {
    try {
      const { addressId, products, payment } = request.all()

      const listProducts: ProductProps[] = products

      const user = await auth.authenticate()

      if (listProducts.length === 0) {
        return response.badRequest({
          type: 'Error',
          message: 'Não foi possivel concluir',
        })
      }

      const validateOrder = { user_id: user.id, address_id: addressId, payment, status: 'PENDING' }

      await createOrderValidation.validate(validateOrder)

      const order = await Order.create(validateOrder)

      let totalQuantity = 0
      let totalPrice = 0

      for (const product of listProducts) {
        const findProduct = await Product.findBy('id', product.id_product)
        if (findProduct) {
          const orderProduct = {
            order_id: order.id,
            product_id: findProduct.id,
            quantity: product.quantity,
          }

          await createOrderProductValidation.validate(orderProduct)

          await OrderProduct.create(orderProduct)

          totalPrice += findProduct?.price * product.quantity
          totalQuantity += product.quantity
        }
      }

      await updateOrderWithPartialAttributes.validate({ totalPrice, totalQuantity })

      order.merge({ totalPrice, totalQuantity })

      await order.save()

      response.ok({ order })
    } catch (error) {
      return response.badRequest({
        type: 'Error',
        message: 'Não foi consultar produtos',
        error,
      })
    }
  }
}
