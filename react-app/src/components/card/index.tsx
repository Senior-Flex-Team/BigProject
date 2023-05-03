import { type FC } from 'react';

import { type ICard } from '../../entities/card';

import styles from './card.module.css';

interface Properties {
  card: ICard;
}

export const Card: FC<Properties> = ({ card }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.authorImg}>
          <img
            src={card.authorImage}
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
      <div className={styles.body}>
        <div className={styles.contentWrapper}>
          <div className={styles.title}>{card.title}</div>
          <p className={styles.content}>{card.content}</p>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.image}>
            <img
              src={card.image}
              alt=''
            />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <span className={styles.tag}>{card.tags[0]}</span>
        <span className={styles.timeToRead}>{card.timeToRead}</span>
      </div>
    </div>
  );
};
