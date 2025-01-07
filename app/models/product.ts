import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne, belongsTo } from '@adonisjs/lucid/orm'
import Market from './market.js'
import Category from './category.js'

import type { HasOne, HasMany, BelongsTo } from '@adonisjs/lucid/types/relations'
import OrderProduct from './order_product.js'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'market_id' })
  declare marketId: number

  @column()
  declare categoryId: number

  @column()
  declare name: string

  @column()
  declare description: string

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

  @belongsTo(() => Market)
  declare market: BelongsTo<typeof Market>

  @belongsTo(() => Category)
  declare category: BelongsTo<typeof Category>

  @hasMany(() => OrderProduct, {
    foreignKey: 'order_id',
  })
  declare orderProducts: HasMany<typeof OrderProduct>
}
