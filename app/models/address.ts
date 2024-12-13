import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'

import type { HasOne } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column({ columnName: 'zip_code' })
  declare zipCode: string

  @column()
  declare address: string

  @column()
  declare number: string

  @column()
  declare complement: string

  @column()
  declare neighborhood: string

  @column()
  declare city: string

  @column()
  declare uf: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(() => User)
  declare user: HasOne<typeof User>
}
