import { FC } from 'react';
import styles from './Error.module.scss';

type ErrorProps = {
  message: string | undefined;
};

const Error: FC<ErrorProps> = ({ message }) => {
  return <div className={styles.error}>
    <p className={styles.errorText}>Error {message || ''}</p>
  </div>;
};

export default Error;
