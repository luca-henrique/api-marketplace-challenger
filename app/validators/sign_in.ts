import vine from '@vinejs/vine'

export const signInValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().trim().escape(),
  })
)
