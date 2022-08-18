import salad from '../assets/Dishes/Mask-group-2.png';

const meals = [
  {
    id: 0,
    name: 'Salada Ravanello',
    description:
      'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
    img: salad,
    price: 49.97,
    ingredients: [
      {
        name: 'Alface',
        img: '',
      },
      {
        name: 'Tomate',
        img: '',
      },
      {
        name: 'Rabanete',
        img: '',
      },
      {
        name: 'Pão Naan',
        img: '',
      },
    ],
  },
];

const desserts = [];

const drinks = [];

export { meals, desserts, drinks };
