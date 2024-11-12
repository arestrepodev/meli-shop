
import { useEffect, useState } from 'react';
import { DataDetails, ItemProps } from '../models/item';
import { getItemDetails } from '../api/getItem';
import { useNavigate } from 'react-router-dom';

const useItemDetail = (id: string | null | undefined) => {
  const [itemDetail, setItemDetail] = useState<ItemProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!id) {
      navigate('/');
      return;
    }
    const fetchItem = async () => { 
      try {
        setLoading(true);
        const data = await getItemDetails(id);
        const { item } = data as DataDetails;
        setItemDetail(item);
      } catch (error) {
        console.error('Error fetching item details:', error);
        setError(error instanceof Error ? error.message : 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    }
    fetchItem();
  }, [id, navigate]);

  return { itemDetail, loading, error };
}

export default useItemDetail;