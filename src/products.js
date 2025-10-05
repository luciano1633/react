// products.js - Datos de productos para la tienda de videojuegos PlayStation

// Importar imágenes
import godOfWarImg from './assets/images/God_Of_War.jpg';
import spidermanImg from './assets/images/Spiderman.jpg';
import tlou2Img from './assets/images/The Last of us 2.jpg';
import horizonImg from './assets/images/Horizon.jpg';
import spiderman2Img from './assets/images/Spiderman2.jpg';
import unchartedImg from './assets/images/Uncharted.jpg';

export const products = [
  {
    id: 1,
    name: "God of War",
    normalPrice: 59990,
    offerPrice: 49990,
    description: "Únete a Kratos en una épica aventura llena de acción y mitología nórdica.",
    image: godOfWarImg
  },
  {
    id: 2,
    name: "Spider-Man",
    normalPrice: 69990,
    offerPrice: 59990,
    description: "Experimenta la aventura de Peter Parker como el superhéroe arácnido.",
    image: spidermanImg
  },
  {
    id: 3,
    name: "The Last of Us Part II",
    normalPrice: 49990,
    offerPrice: 39990,
    description: "Una historia emocional y profunda en un mundo post-apocalíptico.",
    image: tlou2Img
  },
  {
    id: 4,
    name: "Horizon Forbidden West",
    normalPrice: 64990,
    offerPrice: 54990,
    description: "Explora un mundo abierto futurista como Aloy en esta secuela épica.",
    image: horizonImg
  },
  {
    id: 5,
    name: "Spider-Man 2",
    normalPrice: 69990,
    offerPrice: 59990,
    description: "La nueva aventura de Peter Parker y Miles Morales como Spider-Man.",
    image: spiderman2Img
  },
  {
    id: 6,
    name: "Uncharted",
    normalPrice: 54990,
    offerPrice: 44990,
    description: "Aventura de acción con Nathan Drake en busca de tesoros legendarios.",
    image: unchartedImg
  }
];

