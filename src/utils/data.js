import salad from '../assets/Dishes/Mask group-3.png';
import toast from '../assets/Dishes/Mask group-1.png';
import coffee from '../assets/Dishes/Mask group-9.png';
import cake from '../assets/Dishes/Mask group-7.png';
import tea from '../assets/Dishes/Mask group-10.png';
import passionfruit from '../assets/Dishes/Mask group-8.png';
import whiskey from '../assets/Dishes/Mask group-11.png';

export const items = [
  {
    id: 1,
    title: 'Salada Ravanello',
    description:
      'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
    src: salad,
    price: 49.97,
    type: 'meal',
    ingredients: [
      {
        title: 'Alface',
        src: '',
      },
      {
        title: 'Tomate',
        src: '',
      },
      {
        title: 'Rabanete',
        src: '',
      },
      {
        title: 'Pão Naan',
        src: '',
      },
    ],
  },
  {
    id: 2,
    title: 'Torradas de Parma',
    description:
      'Presunto de parma e rúcula em um pão com fermentação natural.',
    src: toast,
    price: 26.97,
    type: 'meal',

    ingredients: [],
  },
  {
    id: 3,
    title: 'Torradas de Parma',
    description:
      'Presunto de parma e rúcula em um pão com fermentação natural.',
    src: toast,
    price: 26.97,
    type: 'meal',

    ingredients: [
      {
        title: 'Presunto',
        src: '',
      },
      {
        title: 'Rúcula',
        src: '',
      },
      {
        title: 'Pão Naan',
        src: '',
      },
    ],
  },
  {
    id: 4,
    title: 'Bolo de Damasco',
    description: 'Damascos frescos em uma massa sem glúten.',
    src: cake,
    price: 19.97,
    type: 'dessert',

    ingredients: [
      {
        title: 'Damasco',
        src: '',
      },
      {
        title: 'farinha',
        src: '',
      },
    ],
  },
  {
    id: 5,
    title: 'Bolo de Damasco',
    description: 'Damascos frescos em uma massa sem glúten.',
    src: cake,
    price: 19.97,
    type: 'dessert',
    ingredients: [
      {
        title: 'Damasco',
        src: '',
      },
      {
        title: 'farinha',
        src: '',
      },
    ],
  },
  {
    id: 6,
    title: 'Bolo de Damasco',
    description: 'Damascos frescos em uma massa sem glúten.',
    src: cake,
    price: 19.97,
    type: 'dessert',
    ingredients: [
      {
        title: 'Damasco',
        src: '',
      },
      {
        title: 'farinha',
        src: '',
      },
    ],
  },
  {
    id: 7,
    title: 'Espresso',
    description: 'Café cremoso feito na temperatura e pressões perfeitas.',
    src: coffee,
    price: 49.97,
    type: 'drink',
    ingredients: [
      {
        title: 'Café',
        src: '',
      },
    ],
  },
  {
    id: 8,
    title: 'Suco de Maracujá',
    description: 'Suco de maracujá gelado, cremoso, docinho.',
    src: passionfruit,
    price: 32.97,
    type: 'drink',
    ingredients: [
      {
        title: 'maracujá',
        src: '',
      },
    ],
  },
  {
    id: 9,
    title: 'Pomo bourbon',
    description: 'Maçã, whisky, canela. On the rocks.',
    src: whiskey,
    type: 'drink',
    price: 79.97,
    ingredients: [
      {
        title: 'canela',
        src: '',
      },
      {
        title: 'whiskey',
        src: '',
      },
      {
        title: 'maçã',
        src: '',
      },
    ],
  },
  {
    id: 10,
    title: "Tè d'autunno",
    description: 'Chá de anis, canela e limão. Sinta o outono italiano.',
    src: tea,
    price: 19.97,
    type: 'drink',
    ingredients: [
      {
        title: 'canela',
        src: '',
      },
      {
        title: 'amiz',
        src: '',
      },
      {
        title: 'limão',
        src: '',
      },
    ],
  },
];

const meals = items.filter((product) => product.type === 'meal');
const desserts = items.filter((product) => product.type === 'dessert');
const drinks = items.filter((product) => product.type === 'drink');

export { meals, desserts, drinks };
