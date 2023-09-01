import expressoAmericano from '../assets/americano.svg'
import arabe from '../assets/arabe.svg'
import cafeComLeite from '../assets/cafe-com-leite.svg'
import expressoGelado from '../assets/cafe-gelado.svg'
import capuccino from '../assets/capuccino.svg'
import chocolateQuente from '../assets/chocolate-quente.svg'
import cubano from '../assets/cubano.svg'
import expressoCremoso from '../assets/expresso-cremoso.svg'
import expressoTradicional from '../assets/expresso.svg'
import havaiano from '../assets/havaiano.svg'
import irlandes from '../assets/irlandes.svg'
import latte from '../assets/latte.svg'
import macchiato from '../assets/macchiato.svg'
import mocaccino from '../assets/mocaccino.svg'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  tags: string[]
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    image: expressoTradicional,
    tags: ['tradicional'],
  },
  {
    id: '2',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    image: expressoAmericano,
    tags: ['tradicional'],
  },
  {
    id: '3',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    image: expressoCremoso,
    tags: ['tradicional'],
  },
  {
    id: '4',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    image: expressoGelado,
    tags: ['tradicional', 'gelado'],
  },
  {
    id: '5',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    image: cafeComLeite,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '6',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    image: latte,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '7',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    image: capuccino,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '8',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    image: macchiato,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '9',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    image: mocaccino,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '10',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    image: chocolateQuente,
    tags: ['especial', 'com leite'],
  },
  {
    id: '11',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    image: cubano,
    tags: ['especial', 'alcóolico', 'gelado'],
  },
  {
    id: '12',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    image: havaiano,
    tags: ['especial'],
  },
  {
    id: '13',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    image: arabe,
    tags: ['especial'],
  },
  {
    id: '14',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    image: irlandes,
    tags: ['especial', 'alcóolico'],
  },
]
