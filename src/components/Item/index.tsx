import { Link } from 'react-router-dom';
import { ItemProps } from '../../models/item';
import styles from './Item.module.scss';
import { FC } from 'react';


export const Item: FC<ItemProps> = (props) => {
  const { id, title, price, picture, condition, free_shipping } = props;
  return (
    <Link to={`/items/${id}`} id={id} className={styles.itemLink}>
    <article id={id} className={styles.item}>
      <img src={picture} alt={title} width={180} height={180} className={styles.itemImage}/>
      <div className={styles.itemTitleContainer}>
        <h1 className={styles.itemPrice}>
          {price.amount}
          {free_shipping && <img src="/images/ic_shipping@2x.png" alt="Envío gratis" width={18} height={18} />}
        </h1>
        <p className={styles.itemTitle}>{title}</p>
      </div>
      <div className={styles.itemConditionContainer}>
        <p>{condition}</p>
      </div>
      </article>
    </Link>
  )
}

export default Item;