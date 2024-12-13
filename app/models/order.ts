import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'address_id' })
  declare addressId: number

  @column({ columnName: 'user_id' })
  declare userId: number

  @column({ columnName: 'total_price' })
  declare totalPrice: number

  @column({ columnName: 'total_quantity' })
  declare totalQuantity: number

  @column()
  declare payment: string

  @column()
  declare status: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(() => User)
  declare user: HasOne<typeof User>
}
