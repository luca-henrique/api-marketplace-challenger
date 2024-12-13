import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { HasOne, HasMany } from '@adonisjs/lucid/types/relations'
import OrderProduct from './order_product.js'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare category: string

  @column()
  declare price: number

  @column()
  declare stock: number

  @column()
  declare image: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(() => User)
  declare user: HasOne<typeof User>

  @hasMany(() => OrderProduct, {
    foreignKey: 'order_id',
  })
  declare orderProducts: HasMany<typeof OrderProduct>
}
