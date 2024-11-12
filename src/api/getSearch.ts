import { mappedDataSearch } from '../utils';

export async function searchItems(query: string, author: { name: string, lastname: string }) {
  try {
    const response = await fetch(`/api/sites/MLA/search?q=${query}`);
    const data = await response.json();
    const AUTHOR = { name: author.name, lastname: author.lastname };
    return mappedDataSearch(data.results, AUTHOR);
  } catch (error) {
    console.error('Error fetching search items:', error);
    return { error: 'Error fetching search items' };
  }
}