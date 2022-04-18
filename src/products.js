const products = [
  {
    id: '1',
    name: 'McExtreme Cheddar',
    price: 700,
    category: 'Hot',
    img: '../../img/hot/Grand-McExtreme-intenseCheddar.png',
    description: 'Big Mac lechuga tomate etc',
  },
  {
    id: '2',
    name: 'McExtreme Cheddarx2',
    price: 900,
    category: 'Hot',
    img: '../../img/hot/Grand-McExtreme-intenseCheddarDoble.png',
    description: 'Big Mac lechuga tomate etc',
  },
  {
    id: '3',
    name: 'McExtreme Bacon',
    price: 600,
    category: 'Hot',
    img: '../../img/hot/Grand-McExtreme-intenseCheddarBacon.png',
    description: 'Big Mac lechuga tomate etc',
  },
  {
    id: '4',
    name: 'McExtreme Baconx2',
    price: 800,
    category: 'Hot',
    img: '../../img/hot/Grand-McExtreme-intenseCheddarBaconDoble.png',
    description: 'Big Mac lechuga tomate etc',
  },
  {
    id: '5',
    name: 'BigMac',
    price: 600,
    category: 'Hamburguesas',
    img: '../../img/burger/BigMac.png',
    description: 'Big Mac lechuga tomate etc',
  },
  {
    id: '6',
    name: 'CheeseBurger',
    price: 600,
    category: 'Hamburguesas',
    img: '../../img/burger/CheeseBurger.png',
    description: 'Big Mac lechuga tomate etc',
  },
  {
    id: '7',
    name: 'Cuarto de libra',
    price: 600,
    category: 'Hamburguesas',
    img: '../../img/burger/CuartoDeLibra.png',
    description: 'Big Mac lechuga tomate etc',
  },
  {
    id: '8',
    name: 'Doble con queso',
    price: 600,
    category: 'Hamburguesas',
    img: '../../img/burger/DobleCheeseBurger.png',
    description: 'Big Mac lechuga tomate etc',
  },
  {
    id: '9',
    name: 'Mc pollo',
    price: 600,
    category: 'Hamburguesas',
    img: '../../img/burger/McPollo.png',
    description: 'Big Mac lechuga tomate etc',
  },
  {
    id: '10',
    name: 'Triple con queso',
    price: 600,
    category: 'Hamburguesas',
    img: '../../img/burger/TripleCheeseBurger.png',
    description: 'Big Mac lechuga tomate etc',
  },
  {
    id: '11',
    name: 'Papas Fritas',
    price: 600,
    category: 'Papas',
    img: '../../img/fries/papas-fritas.png',
    description: 'Big Mac lechuga tomate etc',
  },
  {
    id: '12',
    name: 'Papas Deluxe',
    price: 600,
    category: 'Papas',
    img: '../../img/fries/papas-fritas-deluxe.png',
    description: 'Big Mac lechuga tomate etc',
  },
  {
    id: '13',
    name: 'Bacon&Cheese',
    price: 600,
    category: 'Papas',
    img: '../../img/fries/papas-fritas-top-bacon&cheese.png',
    description: 'Big Mac lechuga tomate etc',
  },
  {
    id: '14',
    name: '25 McNuggets',
    price: 600,
    category: 'Papas',
    img: '../../img/fries/maxi-cubo-25McNuggets.png',
    description: 'Big Mac lechuga tomate etc',
  },
  {
    id: '15',
    name: 'Alitas de pollo',
    price: 600,
    category: 'Papas',
    img: '../../img/fries/alitasDePollo.png',
    description: 'Big Mac lechuga tomate etc',
  },
  {
    id: '16',
    name: '9 McBites',
    price: 600,
    category: 'Papas',
    img: '../../img/fries/9-chicken-McBites.png',
    description: 'Big Mac lechuga tomate etc',
  },
  {
    id: '17',
    name: 'Coca Cola',
    price: 600,
    category: 'Bebidas',
    img: '../../img/drinks/Coca-cola.png',
    description: 'Big Mac lechuga tomate etc',
  },
  {
    id: '18',
    name: 'Coca Cola Light',
    price: 600,
    category: 'Bebidas',
    img: '../../img/drinks/Coca-cola-light.png',
    description: 'Big Mac lechuga tomate etc',
  },
  {
    id: '19',
    name: 'Coca Cola Zero',
    price: 600,
    category: 'Bebidas',
    img: '../../img/drinks/Coca-cola-zero.png',
    description: 'Big Mac lechuga tomate etc',
  },
  {
    id: '20',
    name: 'Sprite',
    price: 600,
    category: 'Bebidas',
    img: '../../img/drinks/Sprite.png',
    description: 'Big Mac lechuga tomate etc',
  },
  {
    id: '21',
    name: 'McFlurry Kitkat',
    price: 600,
    category: 'Helados',
    img: '../../img/dresses/McFlurry-Kitkat.png',
    description: 'Big Mac lechuga tomate etc',
  },
  {
    id: '22',
    name: 'McFlurry Oreo',
    price: 600,
    category: 'Helados',
    img: '../../img/dresses/McFlurry-oreo.png',
    description: 'Big Mac lechuga tomate etc',
  },
  {
    id: '23',
    name: 'McFlurry Oreo Blanco',
    price: 600,
    category: 'Helados',
    img: '../../img/dresses/McFlurry-oreoBlanco.png',
    description: 'Big Mac lechuga tomate etc',
  },
];

/* ITEM LIST CONTAINER */

export const getProductsByCategory = category => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        category
          ? products.filter(item => item.category === category)
          : products
      );
    }, 500);
  });
};

/* ITEM DETAIL CONTAINER */

export const getProductDetail = itemID => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.find(item => item.id === itemID));
    });
  });
};

export const getProductById = itemID => {
  return new Promise(resolve => {
    resolve(products.find(item => item.id === itemID));
  });
};
