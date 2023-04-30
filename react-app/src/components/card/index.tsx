import { type FC } from 'react';

import styles from './card.module.css';
import { type ICardProperties } from './model';
import { CardBody, CardFooter, CardHeader } from './ui';

export const Card: FC<ICardProperties> = ({ card }) => {
  return (
    <div className={styles.container}>
      <CardHeader card={card} />
      <CardBody card={card} />
      <CardFooter card={card} />
    </div>
  );
};
