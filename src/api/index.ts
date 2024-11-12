import { AUTHOR, mappedDataDetails, mappedDataSearch } from '../utils';

export async function searchItems(query: string) {
  try {
    const response = await fetch(`/api/sites/MLA/search?q=${query}`);
    const data = await response.json();
    return mappedDataSearch(data.results, AUTHOR);
  } catch (error) {
    console.error('Error fetching search items:', error);
    return { error: 'Error fetching search items' };
  }
}

export async function getItemDetails(id: string) {
  try {   
    const response = await fetch(`/api/items/${id}`);
    const data = await response.json();
    return mappedDataDetails(data, AUTHOR);
  } catch (error) {
    console.error('Error fetching item details:', error);
    return { error: 'Error fetching item details' };
  }
}