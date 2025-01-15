import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Address from '#models/address'

const address = [
  {
    address: 'Rua A',
    complement: 'Boa vista',
    city: 'Arcoverde',
    zipCode: '565444',
    neighborhood: 'Cohab 1',
    uf: 'PE',
    number: 10,
    user_id: 1,
  },
]

export default class extends BaseSeeder {
  async run() {
    try {
      await Address.createMany(address)
    } catch (error) {
      console.log(error)
    }
  }
}
