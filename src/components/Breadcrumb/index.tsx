import { FC } from 'react';
import styles from './Breadcrumb.module.scss';
import useCategory from '../../hooks/useCategory';

interface BreadcrumbProps {
  id: string | undefined;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ id }) => {
  const category = useCategory(id || '');

  return <div className={styles.breadcrumb}>
    {/* TODO: Add breadcrumb logic as a improvement */}
    {category && category?.pathRoot.map((item, index: number) => {
      return (
        <span key={item.id} className={styles.breadcrumbItem}>
          {index > 0 && ' > '}
          {item.name}
        </span>
      );
    })}
  </div>;;
};

export default Breadcrumb;
