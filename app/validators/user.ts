import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(4),
    password: vine.string().trim().escape(),
    email: vine.string().unique(async (db, value) => {
      const user = await db.from('users').where('email', value).first()
      return !user
    }),
  })
)
