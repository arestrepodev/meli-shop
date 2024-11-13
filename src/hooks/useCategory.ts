import { useState } from 'react';
import { useEffect } from 'react';
import getCategory from '../api/getCategory';
import { Category } from '../models/category';


const useCategory = (id: string) => {
  const [category, setCategory] = useState<Category>();

  useEffect(() => {
    const fetchCategory = async () => {
      const category: Category = await getCategory(id);
      setCategory(category);
    };
    fetchCategory();
  }, [id]);

  return category;
};

export default useCategory;