import vine from '@vinejs/vine'

export const listProductQueryParamsValidator = vine.compile(
  vine.object({
    page: vine.number().positive().optional(),
    limit: vine.number().range([1, 50]).positive().optional(),
    price: vine.number().positive().optional(),
    search: vine.string().optional(),
    category: vine.string().optional(),
  })
)
