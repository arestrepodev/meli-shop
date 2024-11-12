import { FC } from 'react';
import Search from '../components/Search';
import Empty from '../components/Empty';

const Home: FC = () => {
  return (
    <div>
      <Search />
      <Empty />
    </div>
  );
};

export default Home;
