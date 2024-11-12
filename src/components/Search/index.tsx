import { formatSearchQuery, AUTHOR } from '../../utils';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Search.module.scss';
import { FC } from 'react';

const Search: FC = () => {
  const navigate = useNavigate();

  const handleSearch = (search: string) => {
    const formattedSearch = formatSearchQuery(search);
    if (formattedSearch) {
      console.log('formattedSearch', formattedSearch);
      const url = `/items?search=${formattedSearch}&name=${AUTHOR.name}&lastname=${AUTHOR.lastname}`;
      navigate(url);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const searchInput = form.querySelector('input[name="search"]') as HTMLInputElement;
    const searchValue = searchInput?.value || '';
    handleSearch(searchValue);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/">
          <img src="/images/Logo_ML@2x.png" alt="logo" width={53} height={36}/>
        </Link>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input className={styles.searchInput} type="text" placeholder="Nunca dejes de buscar" name='search' data-testid="search-input"/>
          <button type="submit" className={styles.searchButton}>
            <img src="/images/ic_Search@2x.png" alt="search" width={18} height={18}/>
          </button>
        </form>
      </header>
    </div>
  );
};

export default Search;
