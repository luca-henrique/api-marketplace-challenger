import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

const user = [{ name: 'Lucas', password: '123123', email: 'lucas@gmail.com' }]

export default class extends BaseSeeder {
  async run() {
    await User.createMany(user)
  }
}
