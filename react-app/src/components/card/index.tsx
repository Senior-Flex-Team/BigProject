import { type FC } from 'react';

import styles from './card.module.css';
import { CardHeader } from './ui/card-header';
import { CardBody } from './ui/card-body';
import { CardFooter } from './ui/card-footer';
import { type ICardProperties } from './model';

export const Card: FC<ICardProperties> = ({ card }) => {
  return (
    <div className={styles.container}>
      <CardHeader card={card} />
      <CardBody card={card} />
      <CardFooter card={card} />
    </div>
  );
};
