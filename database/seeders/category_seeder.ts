import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Category from '#models/category'

const mock = [
  {
    name: 'Cozimento',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/baking-needs.png?t=2025-01-03T18%3A44%3A29.336Z',
    path: 'baking-needs',
  },
  {
    name: 'Beleza & Saúde',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/baking-needs.png?t=2025-01-03T18%3A44%3A29.336Z',
    path: 'beauty-health',
  },
  {
    name: 'Bebidas',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/baking-needs.png?t=2025-01-03T18%3A44%3A29.336Z',
    path: 'beverages',
  },
  {
    name: 'Padaria',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/bread-bakery.png?t=2025-01-03T18%3A44%3A56.089Z',
    path: 'bread-bakery',
  },
  {
    name: 'Culinária',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/cooking.png?t=2025-01-03T18%3A45%3A06.767Z',
    path: 'cooking',
  },
  {
    name: 'Diabético',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/diabetic-food.png?t=2025-01-03T18%3A45%3A14.414Z',
    path: 'diabetic-food',
  },
  {
    name: 'Detergentes',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/dish-detergents.png?t=2025-01-03T18%3A45%3A19.939Z',
    path: 'dish-detergents',
  },
  {
    name: 'Peixe e carne',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/fish.png?t=2025-01-03T18%3A45%3A29.585Z',
    path: 'fish',
  },
  {
    name: 'Frutas Frescas',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/fresh-fruit.png?t=2025-01-03T18%3A45%3A35.007Z',
    path: 'fresh-fruit',
  },
  {
    name: 'Óleo',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/oil.png?t=2025-01-03T18%3A45%3A43.957Z',
    path: 'oil',
  },
  {
    name: 'Lanches',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/snacks.png?t=2025-01-03T18%3A45%3A50.081Z',
    path: 'snacks',
  },
  {
    name: 'Legumes Frescos',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/fresh-vegetables.png?t=2025-01-03T18%3A46%3A23.497Z',
    path: 'fresh-vegetables',
  },
]

export default class extends BaseSeeder {
  async run() {
    await Category.createMany(mock)
  }
}
