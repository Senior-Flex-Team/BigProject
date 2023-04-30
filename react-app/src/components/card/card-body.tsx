import { type FC } from 'react';

import { type ICard } from '../../entities/card';

import styles from './card.module.css';

interface Properties {
  card: ICard;
}

export const CardBody: FC<Properties> = ({ card }) => {
  return (
    <div className={styles.body}>
      <div className={styles.contentWrapper}>
        <div className={styles.title}>{card.title}</div>
        <p className={styles.content}>{card.content}</p>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.image}>
          <img
            src={card.img}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};
