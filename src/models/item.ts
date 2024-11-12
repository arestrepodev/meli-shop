export interface ItemProps {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number | string;
    decimals: number;
  };
  picture: string;
  condition: string;
  description: string;
  free_shipping: boolean;
  categoryId: string;
}

export interface DataDetails {
  item: ItemProps;
  author: { name: string, lastname: string };
}

export interface DataSearch {
  author: { name: string, lastname: string };
  items: ItemProps[];
}