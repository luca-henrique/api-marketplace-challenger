import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name').notNullable()
      table.integer('price').notNullable()
      table.string('description').notNullable()
      table.integer('stock').defaultTo(0)
      table.string('image').notNullable()
      table.integer('visit').defaultTo(0)

      table.integer('market_id').unsigned().references('markets.id').onDelete('CASCADE')
      table.integer('category_id').unsigned().references('categories.id').onDelete('CASCADE')
      table.integer('brand_id').unsigned().references('brands.id').onDelete('SET NULL')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
