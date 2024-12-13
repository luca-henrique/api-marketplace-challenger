import vine from '@vinejs/vine'

export const createOrderProductValidation = vine.compile(
  vine.object({
    order_id: vine.number().unique(async (db, value) => {
      const user = await db.from('orders').where('id', value).first()
      return !!user
    }),
    product_id: vine.number().unique(async (db, value) => {
      const address = await db.from('products').where('id', value).first()
      return Boolean(address)
    }),
    quantity: vine.number(),
  })
)
