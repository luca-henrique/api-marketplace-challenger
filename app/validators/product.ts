import vine from '@vinejs/vine'

export const createProductValidation = vine.compile(
  vine.object({
    name: vine.string(),
    description: vine.string(),
    price: vine.number(),
    category: vine.string(),
    image: vine.string(),
  })
)
