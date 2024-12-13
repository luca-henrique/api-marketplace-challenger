import Order from '#models/order'
import OrderProduct from '#models/order_product'
import Product from '#models/product'
import type ProductType from '#models/product'
import type { HttpContext } from '@adonisjs/core/http'

interface ProductProps {
  id_product: number
  quantity: number
}

export default class CreateOrderController {
  async handle({ request, response, auth }: HttpContext) {
    try {
      const { idAddress, products } = request.all()

      const user = await auth.authenticate()

      // const orderProduct = await OrderProduct.create({})

      const order = await Order.create({
        userId: user.id,
        addressId: idAddress,
        status: 'PENDING',
        payment: 'CREDIT_CARD',
      })

      let totalQuantity = 0
      let totalPrice = 0

      for (const product of products) {
        const findProduct = await Product.findBy('id', product.id_product)
        if (findProduct) {
          await OrderProduct.create({
            orderId: order.id,
            productId: findProduct.id,
            quantity: product.quantity,
          })

          totalPrice += findProduct?.price * product.quantity
          totalQuantity += product.quantity
        }
      }

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
