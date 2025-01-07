import vine from '@vinejs/vine'

export const createProductValidation = vine.compile(
  vine.object({
    name: vine.string(),
    description: vine.string(),
    price: vine.number(),
    image: vine.string(),
    categoryId: vine.number().exists(async (db, value) => {
      const categories = await db.from('categories').where('id', value).first()
      return categories ? true : false
    }),
    marketId: vine.number().exists(async (db, value) => {
      const markets = await db.from('markets').where('id', value).first()
      return markets ? true : false
    }),
  })
)
