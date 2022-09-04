import molla from '../assets/Dishes/Mask group-3.png';
import ravanello from '../assets/Dishes/Mask group.png';
import spaghetti from '../assets/Dishes/Mask-group-2.png';
import pie from '../assets/Dishes/Mask group-4.png';
import peachy from '../assets/Dishes/Mask group-5.png';
import macaroons from '../assets/Dishes/Mask group-6.png';
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
    src: ravanello,
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
    title: 'Salada Molla',
    description: 'Tomates, coentro, pepino, cebola roxa. Frescos e temperados.',
    src: molla,
    price: 19.97,
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
    title: 'Prugna Pie',
    description: 'Torta de ameixa com massa amanteigada, polvilho em açúcar.',
    src: pie,
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
    title: 'Peachy pastrie',
    description: 'Torta de ameixa com massa amanteigada, polvilho em açúcar.',
    src: peachy,
    price: 32.97,
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
    title: 'Macaroons',
    description: 'DFarinha de amêndoas, manteiga, claras e açúcar.',
    src: macaroons,
    price: 79.97,
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
  {
    id: 11,
    title: 'Spaguetti Gambe',
    description: 'Massa fresca com camarões e pesto.',
    src: spaghetti,
    price: 79.97,
    type: 'meal',
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
  {
    id: 12,
    title: 'Bolo de Damasco',
    description: 'Farinha de amêndoas, manteiga, claras e açúcar.',
    src: cake,
    price: 79.97,
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
];

const meals = items.filter((product) => product.type === 'meal');
const desserts = items.filter((product) => product.type === 'dessert');
const drinks = items.filter((product) => product.type === 'drink');

export { meals, desserts, drinks };
