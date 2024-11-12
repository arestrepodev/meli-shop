import { useEffect, useState } from 'react';
import { ItemProps } from '../models/item';
import { getSearch } from '../api/getSearch';

interface SearchProps {
  search: string;
  author: {
    name: string;
    lastname: string;
  }
}

const useSearch = ({ search, author }: SearchProps) => {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const data = await getSearch(search, author);
        setItems(data?.items || []);
      } catch (error) { 
        setError(error instanceof Error ? error.message : 'An unexpected error occurred');
      } finally {
      setLoading(false);
      }
    };
    fetchItems();
  }, [search]);

  return { items, loading, error };
}

export default useSearch;