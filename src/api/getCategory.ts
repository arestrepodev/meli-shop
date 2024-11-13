import { Category } from '../models/category';
import { mapCategory } from '../utils';

const getCategory = async (id: string) : Promise<Category> => {
  try {
    const response = await fetch(`/api/categories/${id}`);
    const data = await response.json();
    const mappedCategory = mapCategory(data);
    return mappedCategory;
  } catch (error) {
    console.error('Error fetching data', error);
    return {
      id: '',
      name: '',
      pathRoot: []
    };
  }
};

export default getCategory;