import vine from '@vinejs/vine'

export const listProductQueryParamsValidator = vine.compile(
  vine.object({
    page: vine.number().positive(),
    limit: vine.number().range([1, 50]).positive(),
    price: vine.number().positive().optional(),
    search: vine.string(),
    category: vine.string(),
  })
)
