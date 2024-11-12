import { FC } from 'react';
import styles from './Breadcrumb.module.scss';
const Breadcrumb: FC = () => {
  return <div className={styles.breadcrumb}>
    {/* TODO: Add breadcrumb logic as a improvement */}
    {`Electronica > Audio > Auriculares`}
  </div>;;
};

export default Breadcrumb;
