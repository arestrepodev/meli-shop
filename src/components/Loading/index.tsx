import { FC } from 'react';
import styles from './Loading.module.scss';

const Loading: FC = () => {
  return (
    <div className={styles.loading}>
    <p className={styles.loadingText}>Loading...</p>
    </div>
  );
};

export default Loading;
