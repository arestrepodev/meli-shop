import {formatSearchQuery, mappedDataSearch } from '../utils';


export const getSearch = async (query: string, author: { name: string, lastname: string }) => {
  const formattedQuery = formatSearchQuery(query);
  if (!formattedQuery) return null;

  try {
    const response = await fetch(`/api/sites/MLA/search?q=${formattedQuery}`);
    const data = await response.json();
    const { results } = data;
    const items = results.slice(0, 4);
    return mappedDataSearch(items, author);
  } catch (error) {
    console.error('Error fetching data', error);
    return null;
  }
};

