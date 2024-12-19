import { BaseSeeder } from '@adonisjs/lucid/seeders'

const data = [
  {
    label: 'Achocolatado',
    value: 'achocolatado',
    selected: false,
    quantity: 12,
  },
  {
    label: 'Águas',
    value: 'aguas',
    selected: false,
    quantity: 94,
  },
  {
    label: 'Bebida Láctea',
    value: 'bebida-lactea',
    selected: false,
    quantity: 64,
  },
  {
    label: 'Bebida Vegetal',
    value: 'bebida-vegetal',
    selected: false,
    quantity: 55,
  },
  {
    label: 'Cafés e Chás',
    value: 'cafes-e-chas',
    selected: false,
    quantity: 89,
  },
  {
    label: 'Cervejas',
    value: 'cervejas',
    selected: false,
    quantity: 148,
  },
  {
    label: 'Destilados',
    value: 'destilados',
    selected: false,
    quantity: 257,
  },
  {
    label: 'Energéticos e Isotônicos',
    value: 'energeticos-e-isotonicos',
    selected: false,
    quantity: 75,
  },
  {
    label: 'Espumantes',
    value: 'espumantes',
    selected: false,
    quantity: 85,
  },
  {
    label: 'Gelo',
    value: 'gelo',
    selected: false,
    quantity: 1,
  },
  {
    label: 'Kits de Bebidas e Presenteáveis',
    value: 'kits-de-bebidas-e-presenteaveis',
    selected: false,
    quantity: 4,
  },
  {
    label: 'Kits e Presenteáveis',
    value: 'kits-e-presenteaveis',
    selected: false,
    quantity: 18,
  },
  {
    label: 'Refrigerantes',
    value: 'refrigerantes',
    selected: false,
    quantity: 179,
  },
  {
    label: 'Sidra',
    value: 'sidra',
    selected: false,
    quantity: 2,
  },
  {
    label: 'Sucos e Refrescos',
    value: 'sucos-e-refrescos',
    selected: false,
    quantity: 285,
  },
  {
    label: 'Vinhos',
    value: 'vinhos',
    selected: false,
    quantity: 511,
  },
  {
    label: 'Xarope Concentrado',
    value: 'xarope-concentrado',
    selected: false,
    quantity: 16,
  },
]

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
  }
}
