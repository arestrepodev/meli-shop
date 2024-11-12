import { FC, ReactNode } from 'react';
import styles from './Grid.module.scss';

interface GridProps {
  children: ReactNode;
}

const Grid: FC<GridProps> = ({ children }) => {
  return <section className={styles.grid}>{children}</section>;
};

export default Grid;