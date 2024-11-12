import { FC } from 'react';
import Search from '../components/Search';
import Breadcrumb from '../components/Breadcrumb';
import { useSearchParams } from 'react-router-dom';
import Item from '../components/Item';
import { ItemProps } from '../models/item';
import Empty from '../components/Empty';
import Loading from '../components/Loading';
import Error from '../components/Error';
import useSearch from '../hooks/useSearch';
import Grid from '../components/Grid';

const Items: FC = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || '';
  const author = { name: 'Juan', lastname: 'Perez' };

  const { items, loading, error } = useSearch({ search, author });

  return (
    <div>
      <Search />
      {items.length > 0 && <Breadcrumb id={items[0].categoryId}/>}
      {loading && <Loading />}
      {error && <Error message={error} />}
      {items.length === 0 && ( <Empty /> )}
      <Grid>
        {items.map((item: ItemProps) => (
          <Item key={item.id} {...item} />
        ))}
      </Grid> 
    </div>
  );
};

export default Items;
