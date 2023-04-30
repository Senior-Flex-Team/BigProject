import { type FC } from 'react';

import { Card } from '../card';
import { useGetAlLCardsQuery } from '../../context/api-slices/cards-api';

import styles from './cards-feed-container.module.css';

export const CardFeedContainer: FC = () => {
  const { data, isLoading } = useGetAlLCardsQuery();
  console.log('Is Loading:', isLoading);
  const content =
    data && data.length > 0 ? (
      data.map((card, index) => (
        <Card
          key={index}
          card={card}
        />
      ))
    ) : (
      <div className={styles.noCards}>No cards found</div>
    );

  return <div className={styles.cardsFeedContainer}>{content}</div>;
};
