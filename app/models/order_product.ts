import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, manyToMany } from '@adonisjs/lucid/orm'
import type { HasOne, ManyToMany } from '@adonisjs/lucid/types/relations'
import Product from './product.js'
import User from './user.js'
import Address from './address.js'

export default class OrderProduct extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'order_id' })
  declare orderId: number

  @column()
  declare quantity: number

  @column({ columnName: 'product_id' })
  declare productId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Product, {
    pivotTable: 'orders_products',
    pivotForeignKey: 'order_id',
    pivotRelatedForeignKey: 'product_id',
    pivotTimestamps: true,
  })
  declare products: ManyToMany<typeof Product>

  @hasOne(() => User)
  declare user: HasOne<typeof User>

  @hasOne(() => Address)
  declare address: HasOne<typeof Address>
}
