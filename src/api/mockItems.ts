import { ItemProps } from '../models/item';

const mockItems: ItemProps[] = [
  {
    id: "MLA123456",
    title: "Smartphone XYZ",
    price: {
      currency: "ARS",
      amount: 49999,
      decimals: 0,
    },
    picture: "https://http2.mlstatic.com/D_730470-MLU69828264540_062023-I.jpg",
    condition: "new",
    description: "Smartphone XYZ con cámara de alta resolución y gran capacidad de almacenamiento.",
    free_shipping: true,
  },
  {
    id: "MLA789012",
    title: "Laptop ABC",
    price: {
      currency: "ARS",
      amount: 89999,
      decimals: 0,
    },
    picture: "https://http2.mlstatic.com/D_730470-MLU69828264540_062023-I.jpg",
    condition: "new",
    description: "Laptop ABC con procesador Intel y 8GB de RAM, ideal para trabajo y entretenimiento.",
    free_shipping: false,
  },
  {
    id: "MLA345678",
    title: "Auriculares Inalámbricos DEF",
    price: {
      currency: "ARS",
      amount: 19999,
      decimals: 0,
    },
    picture: "https://http2.mlstatic.com/D_730470-MLU69828264540_062023-I.jpg",
    condition: "used",
    description: "Auriculares inalámbricos DEF con cancelación de ruido y gran duración de batería.",
    free_shipping: true,
  },
  {
    id: "MLA901234",
    title: "Smartwatch GHI",
    price: {
      currency: "ARS",
      amount: 15999,
      decimals: 0,
    },
    picture: "https://http2.mlstatic.com/D_730470-MLU69828264540_062023-I.jpg",
    condition: "new",
    description: "Smartwatch GHI con monitor de ritmo cardíaco y GPS integrado.",
    free_shipping: false,
  },
];

export default mockItems;
