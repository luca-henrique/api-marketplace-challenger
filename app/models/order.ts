import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne, manyToMany } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { HasOne, HasMany } from '@adonisjs/lucid/types/relations'
import OrderProduct from './order_product.js'
import Address from './address.js'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'address_id' })
  declare address_id: number

  @column({ columnName: 'user_id' })
  declare user_id: number

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

  @hasOne(() => User, {
    foreignKey: 'id',
  })
  declare user: HasOne<typeof User>

  @hasOne(() => Address, {
    foreignKey: 'id',
  })
  @hasOne(() => Address)
  declare address: HasOne<typeof Address>

  @hasMany(() => OrderProduct, {
    foreignKey: 'order_id',
  })
  declare orderProducts: HasMany<typeof OrderProduct>
}
