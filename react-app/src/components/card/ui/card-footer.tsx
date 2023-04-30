import { type FC } from 'react';

import styles from '../card.module.css';
import { type ICardProperties } from '../model';

export const CardFooter: FC<ICardProperties> = ({ card }) => {
  return (
    <div className={styles.footer}>
      <span className={styles.tag}>{card.tags[0]}</span>
      <span className={styles.timeToRead}>{card.timeToRead}</span>
    </div>
  );
};
