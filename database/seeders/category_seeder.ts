import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Category from '#models/category'

const mock = [
  {
    name: 'Cozimento',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/baking-needs.png?t=2025-01-03T18%3A44%3A29.336Z',
    path: '/products/baking-needs',
  },
  {
    name: 'Beleza & Saúde',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/baking-needs.png?t=2025-01-03T18%3A44%3A29.336Z',
    path: '/products/beauty-health',
  },
  {
    name: 'Bebidas',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/baking-needs.png?t=2025-01-03T18%3A44%3A29.336Z',
    path: '/products/beverages',
  },
  {
    name: 'Padaria',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/bread-bakery.png?t=2025-01-03T18%3A44%3A56.089Z',
    path: '/products/bread-bakery',
  },
  {
    name: 'Culinária',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/cooking.png?t=2025-01-03T18%3A45%3A06.767Z',
    path: '/products/cooking',
  },
  {
    name: 'Diabético',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/diabetic-food.png?t=2025-01-03T18%3A45%3A14.414Z',
    path: '/products/diabetic-food',
  },
  {
    name: 'Detergentes',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/dish-detergents.png?t=2025-01-03T18%3A45%3A19.939Z',
    path: '/products/dish-detergents',
  },
  {
    name: 'Peixe e carne',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/fish.png?t=2025-01-03T18%3A45%3A29.585Z',
    path: '/products/fish',
  },
  {
    name: 'Frutas Frescas',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/fresh-fruit.png?t=2025-01-03T18%3A45%3A35.007Z',
    path: '/products/fresh-fruit',
  },
  {
    name: 'Óleo',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/oil.png?t=2025-01-03T18%3A45%3A43.957Z',
    path: '/products/oil',
  },
  {
    name: 'Lanches',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/snacks.png?t=2025-01-03T18%3A45%3A50.081Z',
    path: '/products/snacks',
  },
  {
    name: 'Legumes Frescos',
    image:
      'https://wmxpnlilkuedvwtzjwqo.supabase.co/storage/v1/object/public/images/categories/fresh-vegetables.png?t=2025-01-03T18%3A46%3A23.497Z',
    path: '/products/fresh-vegetables',
  },
]

export default class extends BaseSeeder {
  async run() {
    await Category.createMany(mock)
  }
}
