import { useState } from 'react';
import { useEffect } from 'react';
import getCategory from '../api/getCategory';
import { mapCategory } from '../utils';
import { Category } from '../models/category';


const useCategory = (id: string) => {
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      const category = await getCategory(id);
      const mappedCategory = mapCategory(category);
      setCategory(mappedCategory);
    };
    fetchCategory();
  }, [id]);

  return category;
};

export default useCategory;