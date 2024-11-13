import { FC } from 'react';
import styles from './Breadcrumb.module.scss';
import useCategory from '../../hooks/useCategory';

interface BreadcrumbProps {
  id: string | undefined;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ id }) => {
  const category = useCategory(id || '');

  return <div className={styles.breadcrumb}>
    {category && category?.pathRoot.map((item, index: number) => {
      return (
        <p key={item.id} className={styles.breadcrumbItem}>
          <span>
          {index > 0 && ' > '}
          </span>
          <span>
            {item.name}
          </span>
        </p>
        
      );
    })}
  </div>;;
};

export default Breadcrumb;
