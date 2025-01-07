import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Address from './address.js'
export default class Market extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'address_id' })
  declare address_id: number

  @column({ columnName: 'user_id' })
  declare user_id: number

  @column()
  declare name: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(() => User)
  declare user: HasOne<typeof User>

  @hasOne(() => Address)
  declare address: HasOne<typeof Address>
}
