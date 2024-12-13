import vine from '@vinejs/vine'

export const createAddressValidation = vine.compile(
  vine.object({
    address: vine.string(),
    complement: vine.string(),
    number: vine.number(),
    city: vine.string(),
    neighborhood: vine.string(),
    uf: vine.string(),
    zipCode: vine.string(),
  })
)
