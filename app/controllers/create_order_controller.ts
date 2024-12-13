import Order from '#models/order'
import OrderProduct from '#models/order_product'
import Product from '#models/product'
import { createOrderValidation, updateOrderWithPartialAttributes } from '#validators/order'
import { createOrderProductValidation } from '#validators/order_product'
import type { HttpContext } from '@adonisjs/core/http'

export default class CreateOrderController {
  async handle({ request, response, auth }: HttpContext) {
    try {
      const { idAddress, products, payment } = request.all()

      const user = await auth.authenticate()

      const validateOrder = { userId: user.id, addressId: idAddress, payment, status: 'PENDING' }

      await createOrderValidation.validate(validateOrder)

      const order = await Order.create(validateOrder)

      let totalQuantity = 0
      let totalPrice = 0

      for (const product of products) {
        const findProduct = await Product.findBy('id', product.id_product)
        if (findProduct) {
          const orderProduct = {
            orderId: order.id,
            productId: findProduct.id,
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
