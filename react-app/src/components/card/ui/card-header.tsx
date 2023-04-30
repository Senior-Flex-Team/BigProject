import { type FC } from 'react';

import styles from '../card.module.css';
import { type ICardProperties } from '../model';

export const CardHeader: FC<ICardProperties> = ({ card }) => {
  return (
    <div className={styles.header}>
      <div className={styles.authorImg}>
        <img
          src={card.authorImg}
          alt=''
        />
      </div>
      <p className={styles.info}>
        <span className={styles.authorName}>{card.authorName}</span> in
        <span className={styles.category}>{card.categoryName}</span>
        <span className={styles.divider}></span>
        <span className={styles.date}>{card.createdAt}</span>
      </p>
    </div>
  );
};
