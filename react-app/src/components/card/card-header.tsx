import { type FC } from 'react';

import { type ICard } from '../../entities/card';

import styles from './card.module.css';

interface Properties {
  card: ICard;
}

export const CardHeader: FC<Properties> = ({ card }) => {
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
