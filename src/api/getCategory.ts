const getCategory = async (id: string) => {
  try {
    const response = await fetch(`/api/categories/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data', error);
    return null;
  }
};

export default getCategory;