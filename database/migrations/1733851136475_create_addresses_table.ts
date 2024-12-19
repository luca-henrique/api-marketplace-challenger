import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'addresses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('zip_code').notNullable()
      table.string('address').notNullable()
      table.string('number').notNullable()
      table.string('complement').notNullable()
      table.string('neighborhood').notNullable()
      table.string('city').notNullable()
      table
        .enum('uf', [
          'AC',
          'AL',
          'AP',
          'AM',
          'BA',
          'CE',
          'DF',
          'ES',
          'GO',
          'MA',
          'MT',
          'MS',
          'MG',
          'PA',
          'PB',
          'PR',
          'PE',
          'PI',
          'RJ',
          'RN',
          'RS',
          'RO',
          'RR',
          'SC',
          'SP',
          'SE',
          'TO',
        ])
        .notNullable()
      table.integer('user_id').unsigned().references('users.id').onDelete('SET NULL')
      table.integer('market_id').unsigned().references('markets.id').onDelete('SET NULL')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
