import { AUTHOR, mappedDataDetails } from '../utils';

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