import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Search from '../components/Search';
import Breadcrumb from '../components/Breadcrumb';
import Detail from '../components/Detail';
import useItemDetail  from '../hooks/useItemDetail';
import Loading from '../components/Loading';
import Error from '../components/Error';

const Item: FC = () => {
  const { id } = useParams();
  const { itemDetail, loading, error } = useItemDetail(id);

  return (
    <div>
      <Search />
      {itemDetail?.categoryId && <Breadcrumb id={itemDetail?.categoryId}/>}
      {loading && <Loading />}
      {error && <Error message={error} />}
      {itemDetail && <Detail {...itemDetail} />}
    </div>
  )
}

export default Item;
