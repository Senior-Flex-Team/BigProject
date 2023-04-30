import { type FC } from 'react';

import { type ICard } from '../../entities/card';

import styles from './card.module.css';

interface Properties {
  card: ICard;
}

export const CardFooter: FC<Properties> = ({ card }) => {
  return (
    <div className={styles.footer}>
      <span className={styles.tag}>{card.tags[0]}</span>
      <span className={styles.timeToRead}>{card.timeToRead}</span>
    </div>
  );
};
