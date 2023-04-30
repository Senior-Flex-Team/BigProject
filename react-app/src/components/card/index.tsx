import { type FC } from 'react';

import { type ICard } from '../../entities/card';

import styles from './card.module.css';
import { CardHeader } from './card-header';
import { CardBody } from './card-body';
import { CardFooter } from './card-footer';

interface Properties {
  card: ICard;
}

export const Card: FC<Properties> = ({ card }) => {
  return (
    <div className={styles.container}>
      <CardHeader card={card} />
      <CardBody card={card} />
      <CardFooter card={card} />
    </div>
  );
};
