import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'orders'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
      table.integer('address_id').unsigned().references('addresses.id').onDelete('CASCADE')
      table.integer('total_quantity').nullable()
      table.integer('total_price').nullable()
      table.enum('payment', ['CREDIT_CARD', 'PIX', 'INVOICE', 'DEBIT_CARD', 'CASH'])
      table
        .enum('status', [
          'PENDING',
          'PROCESSING',
          'SHIPPED',
          'IN_TRANSIT',
          'OUT_FOR_DELIVERY',
          'DELIVERED',
          'CANCELLED',
          'FAILED',
        ])
        .notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
