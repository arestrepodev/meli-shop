import { ErrorDetails } from '../models/error';
import { DataDetails } from '../models/item';
import { AUTHOR, mappedDataDetails } from '../utils';

export async function getItemDetails(id: string | undefined | null): Promise<DataDetails | ErrorDetails> {
  try {
    if (!id) {
      throw new Error("Invalid ID");
    }
    
    const response = await fetch(`/api/items/${id}`);
    const data = await response.json();
    const item = mappedDataDetails(data, AUTHOR);
    return item;
  } catch (error) {
    console.error('Error fetching item details:', error);
    return { error: 'Error fetching item details' };
  }
}