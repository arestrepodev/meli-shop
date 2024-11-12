
import { useState, useEffect } from 'react';
import { ItemProps } from '../models/item';
import { searchItems } from '../api/getSearch';
const useFetchItems = (search: string, author: { name: string, lastname: string }) => {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const data = await searchItems(search, author);
        setItems(data?.items.slice(0, 4) || []);
        setItems(items || []);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
        setError(errorMessage || 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (search !== ' ') fetchItems();
  }, [search, author, items]);

  return { items, loading, error };
};

export default useFetchItems;
