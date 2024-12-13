import vine from '@vinejs/vine'

export const createOrderValidation = vine.compile(
  vine.object({
    user_id: vine.number().unique(async (db, value) => {
      const user = await db.from('users').where('id', value).first()
      return !!user
    }),
    address_id: vine.number().unique(async (db, value) => {
      const address = await db.from('addresses').where('id', value).first()
      return Boolean(address)
    }),
    payment: vine.string(),
  })
)

export const updateOrderWithPartialAttributes = vine.compile(
  vine.object({
    totalPrice: vine.number(),
    totalQuantity: vine.number(),
  })
)
