
const products = [
  {
    id: '1',
    name: 'Grand McExtreme Intense Cheddar',
    price: 750,
    category: 'Hot',
    img: '../../img/hot/Grand-McExtreme-intenseCheddar.png',
    description: '¿Te gusta el queso? Pues no puedes perderte esta nueva hamburguesa con carne 100% vacuno, cebolla crispy, queso cheddar, bacon crujiente y una deliciosa salsa de queso.',
    ingredients: ["Pan", "Carne", "Bacon", "Queso", "Salsa Smoked Cheddar", "Cebolla Crispy"],
  },
  {
    id: '2',
    name: 'Grand McExtreme Intense Cheddar Doble',
    price: 980,
    category: 'Hot',
    img: '../../img/hot/Grand-McExtreme-intenseCheddarDoble.png',
    description: '¿Te gusta el queso? Pues no puedes perderte esta nueva hamburguesa con doble de carne 100% vacuno, cebolla crispy, queso cheddar, bacon crujiente y una deliciosa salsa de queso.',
    ingredients: ["Pan", "Doble carne", "Bacon", "Queso", "Salsa Smoked Cheddar", "Cebolla Crispy"],
  },
  {
    id: '3',
    name: 'Grand McExtreme Bacon',
    price: 700,
    category: 'Hot',
    img: '../../img/hot/Grand-McExtreme-intenseCheddarBacon.png',
    description: `Disfruta de su deliciosa carne 100% vacuno español acompañada de queso, bacon, cebolla blanca y nuestra inconfundible salsa de bacon. Nuestra Grand McExtreme de McDonald's® más emblemática, ahora con una carne más jugosa y sabrosa.`,
    ingredients: ["Pan", "Carne", "Bacon", "Cebolla"],
  },
  {
    id: '4',
    name: 'Grand McExtreme Bacon Doble',
    price: 890,
    category: 'Hot',
    img: '../../img/hot/Grand-McExtreme-intenseCheddarBaconDoble.png',
    description: `Disfruta de su deliciosa carne 100% vacuno español acompañada de queso, bacon, cebolla blanca y nuestra inconfundible salsa de bacon. Nuestra Grand McExtreme de McDonald's® más emblemática, ahora con una carne más jugosa y sabrosa.`,
    ingredients: ["Pan", "Doble carne", "Bacon", "Cebolla", "Salsa Bacon", "Queso"],
  },
  {
    id: '5',
    name: 'BigMac',
    price: 650,
    category: 'Hamburguesas',
    img: '../../img/burger/BigMac.png',
    description: `Ahora más caliente, más jugosa y más sabrosa. Dos jugosas hamburguesas de carne 100% vacuno español, lechuga fresca y crujiente, cebolla, pepinillo, queso Cheddar fundido y nuestra inimitable salsa secreta. Todo esto envuelto en un nuevo pan de sésamo horneado al estilo tradicional.`,
    ingredients: ["Pan", "Carne", "Queso", "Salsa Big Mac", "Cebolla", "Lechuga Iceberg", "Pepinillos"],
  },
  {
    id: '6',
    name: 'CheeseBurger',
    price: 450,
    category: 'Hamburguesas',
    img: '../../img/burger/CheeseBurger.png',
    description: 'Ahora más caliente, más jugosa y más sabrosa. Nuestra Cheeseburger con kétchup, mostaza, cebolla, pepinillo y queso fundido tipo Cheddar.',
    ingredients: ["Pan", "Carne", "Queso", "Pepinillos", "Cebolla", "Ketchup", "Mostaza"],
  },
  {
    id: '7',
    name: 'Cuarto de libra',
    price: 700,
    category: 'Hamburguesas',
    img: '../../img/burger/CuartoDeLibra.png',
    description: 'Ahora más caliente, más jugosa y más sabrosa. Seguro que eres fanático de una de las hamburguesas más míticas de McDonald’s. ¿Quién puede no rendirse ante su tradicional receta de carne, doble de queso, pepinillo, cebolla en tiras, kétchup y mostaza?',
    ingredients: ["Pan", "Carne", "Queso", "Pepinillos", "Cebolla", "Ketchup", "Mostaza"],
  },
  {
    id: '8',
    name: 'Doble con queso',
    price: 600,
    category: 'Hamburguesas',
    img: '../../img/burger/DobleCheeseBurger.png',
    description: 'Ahora más caliente, más jugosa y más sabrosa. La icónica Cheeseburger de McDonald’s en su versión doble. El doble de carne con kétchup, mostaza, cebolla, pepinillo y queso Cheddar fundido.',
    ingredients: ["Pan", "Doble carne", "Queso", "Pepinillos", "Cebolla", "Ketchup", "Mostaza"],
  },
  {
    id: '9',
    name: 'Mc pollo',
    price: 450,
    category: 'Hamburguesas',
    img: '../../img/burger/McPollo.png',
    description: `El ineludible bocado de pollo crujiente. Crujiente pollo con mayonesa y lechuga, en pan con semilla de sésamo.`,
    ingredients: ["Pan", "Pollo crispy", "Lechuga", "Mayonesa"],
  },
  {
    id: '10',
    name: 'Triple con queso',
    price: 750,
    category: 'Hamburguesas',
    img: '../../img/burger/TripleCheeseBurger.png',
    description: 'Ahora más caliente, más jugosa y más sabrosa. La Cheeseburger triple existe, no es una broma. Tres carnes con kétchup, mostaza, cebolla, pepinillo y su delicioso queso Cheddar fundido.',
    ingredients: ["Pan", "Triple carne", "Queso", "Pepinillos", "Cebolla", "Ketchup", "Mostaza"],
  },
  {
    id: '11',
    name: 'Papas Fritas',
    price: 350,
    category: 'Papas',
    img: '../../img/fries/papas-fritas.png',
    description: 'Son las estrellas del restaurante. Fritas con aceite vegetal, sabrosas y doradas, se sirven con ketchup o mostaza.Disponibles en tres tamaños: Pequeñas, medianas y grandes.',
    ingredients: [],
  },
  {
    id: '12',
    name: 'Papas Deluxe',
    price: 400,
    category: 'Papas',
    img: '../../img/fries/papas-fritas-deluxe.png',
    description: 'Estos sabrosos gajos de patata especiadas, servidas con piel y acompañadas de una salsa especial a la cebolleta, son una alternativa a las famosas patatas fritas. Disponibles en dos tamaños: grandes y medianas. Aptas para celíacos.',
    ingredients: [],
  },
  {
    id: '13',
    name: 'Bacon & Cheese',
    price: 600,
    category: 'Papas',
    img: '../../img/fries/papas-fritas-top-bacon&cheese.png',
    description: 'La versión más top de nuestras papas. Acompañadas de salsa de queso y bacon. ¡No podrás resistirte a ellas!. Disponibles con patatas fritas o Deluxe y en formato individual o para compartir. Valores nutricionales correspondientes a ración individual de patatas fritas.',
    ingredients: [],
  },
  {
    id: '14',
    name: 'Maxi Cubo 25 McNuggets',
    price: 800,
    category: 'Papas',
    img: '../../img/fries/maxi-cubo-25McNuggets.png',
    description: 'Comparte A LO GRANDE. Disfruta en compañía de nuestras clásicas delicias de pollo rebozado ¡Tan irresistibles como el primer día!. Elige entre estas deliciosas salsas: mostaza, agridulce, barbacoa y curry.',
    ingredients: [],
  },
  {
    id: '15',
    name: 'Alitas de pollo',
    price: 700,
    category: 'Papas',
    img: '../../img/fries/alitasDePollo.png',
    description: `Sabrosas alitas de pollo en McDonald's. ¿Quien puede resistirse a las deliciosas alitas de pollo crujientes, con su inconfundible sabor barbacoa, para tomar solo o para compartir con quien tú quieras?. ¡No te resistirás!`,
    ingredients: [],
  },
  {
    id: '16',
    name: '9 Chicken McBites',
    price: 600,
    category: 'Papas',
    img: '../../img/fries/9-chicken-McBites.png',
    description: 'Ahora podrás disfrutar de pequeños bocados de crujiente pollo rebozado. Chicken McBites a pedir de boca.',
    ingredients: [],
  },
  {
    id: '17',
    name: 'Coca Cola',
    price: 250,
    category: 'Bebidas',
    img: '../../img/drinks/Coca-cola.png',
    description: `Destapa la felicidad. Una Coca-Cola bien fría nos hace disfrutar de cada instante de nuestras vidas de una forma especial. Por su sabor único y su carácter refrescante y auténtico, Coca-Cola añade magia a cada momento, sobre todo cuando nos estamos divirtiendo con nuestros amigos. En McDonald's podrás disfrutar de tu Coca- Cola combinada con tu hamburguesa favorita. Hay una variedad para cada ocasión, disfruta de su sabor, la hidratación ya está incluida.`,
    ingredients: [],
  },
  {
    id: '18',
    name: 'Coca Cola Light',
    price: 250,
    category: 'Bebidas',
    img: '../../img/drinks/Coca-cola-light.png',
    description: `Destapa la felicidad. Sabor único y especial, sin calorías. En McDonald's podrás disfrutar de tu Coca- Cola combinada con tu hamburguesa favorita. Hay una variedad para cada ocasión, disfruta de su sabor, la hidratación ya está incluida.`,
    ingredients: [],
  },
  {
    id: '19',
    name: 'Coca Cola Zero',
    price: 250,
    category: 'Bebidas',
    img: '../../img/drinks/Coca-cola-zero.png',
    description: `Destapa la felicidad. Coca-Cola® zero azúcar. El sabor auténtico, zero calorías. En McDonald's podrás disfrutar de tu Coca- Cola combinada con tu hamburguesa favorita. Hay una variedad para cada ocasión, disfruta de su sabor, la hidratación ya está incluida.`,
    ingredients: [],
  },
  {
    id: '20',
    name: 'Sprite',
    price: 250,
    category: 'Bebidas',
    img: '../../img/drinks/Sprite.png',
    description: `Refréscate a lo grande. Sprite es una bebida de sabor lima-limón, transparente y chispeante. Es una marca con una personalidad inconfundible, auténtica y un marcado carácter refrescante que te muestra las cosas tal y como son. Es ideal para acompañar tus comidas o expresar tu creatividad combinándolo como tu quieras.`,
    ingredients: [],
  },
  {
    id: '21',
    name: 'McFlurry Kitkat',
    price: 450,
    category: 'Helados',
    img: '../../img/dresses/McFlurry-Kitkat.png',
    description: `¿Se te ocurre alguna forma mejor de desconectar?. Añade Kit Kat® a tu McFlurry y disfruta de ese delicioso momento. Con sirope de chocolate, caramelo o fresa, ¡todas son buenas opciones! `,
    ingredients: [],
  },
  {
    id: '22',
    name: 'McFlurry Oreo',
    price: 450,
    category: 'Helados',
    img: '../../img/dresses/McFlurry-oreo.png',
    description: `Qué mejor forma de alegrar tu día que disfrutar de un delicioso McFlurry® con Oreo® . Puedes combinarlo con sirope de chocolate, chocolate blanco, caramelo o fresa, a tu gusto.`,
    ingredients: [],
  },
  {
    id: '23',
    name: 'McFlurry Oreo Chocolate Blanco',
    price: 450,
    category: 'Helados',
    img: '../../img/dresses/McFlurry-oreoBlanco.png',
    description: `Báñate en el delicioso sabor del nuevo McFlurry® Oreo® y chocolate blanco, hecho especialmente para los más golosos.`,
    ingredients: [],
  },
];

/* ITEM LIST CONTAINER */

/* export const getProductsByCategory = category => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        category
          ? products.filter(item => item.category === category)
          : products
      );
    }, 500);
  });
}; */

/* ITEM DETAIL CONTAINER */

/* export const getProductDetail = itemID => {
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
 */
