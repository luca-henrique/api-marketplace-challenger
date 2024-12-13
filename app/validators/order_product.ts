import vine from '@vinejs/vine'

export const createOrderProductValidation = vine.compile(
  vine.object({
    orderId: vine.number().unique(async (db, value) => {
      const user = await db.from('orders').where('id', value).first()
      return !!user
    }),
    productId: vine.number().unique(async (db, value) => {
      const address = await db.from('products').where('id', value).first()
      return Boolean(address)
    }),
    quantity: vine.number(),
  })
)
