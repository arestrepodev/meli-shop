import { DataDetails, DataSearch } from '../models/item';

const AUTHOR = { name: "Arnold", lastname: "Restrepo" } as const;
const formatSearchQuery = (query: string): string => {
  const trimmedQuery = query.trim();
  if (!trimmedQuery) return '';
  return encodeURIComponent(trimmedQuery);
};

export { AUTHOR, formatSearchQuery };


export const formatPrice = (amount: number, currency: string) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

export const mappedDataSearch = (results: any, author: { name: string, lastname: string }) : DataSearch => {
  return {
    author: { ...author },
    items: results.map((item: any) => ({
      categories: item.category_id ? [item.category_id] : [],
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: formatPrice(item.price, item.currency_id),
        decimals: 0,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping && item.shipping.free_shipping,
      categoryId: item.category_id,
    })),
  };
};
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mappedDataDetails = (data: any, author: { name: string, lastname: string }): DataDetails => { 
  return {
    author: {
      name: author?.name,
      lastname: author?.lastname,
    },
    item: {
      id: data?.id,
      title: data?.title,
      price: {
        currency: data?.currency_id,
        amount: formatPrice(data?.price, data?.currency_id),
        decimals: 0,
      },
      description: data?.description || 'Sin descripcion',
      picture: data?.pictures[0]?.secure_url,
      condition: data?.condition,
      free_shipping: data?.shipping?.free_shipping,
      categoryId: data?.category_id,
    },
  };
};

export const mapCategory = (category: any) => {
  return {
    id: category.id,
    name: category.name,
    pathRoot: category.path_from_root,
  };
};