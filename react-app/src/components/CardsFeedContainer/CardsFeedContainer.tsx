import styles from "./CardsFeedContainer.module.css"
import React from 'react';
import Card from "../Card/Card";
import {useGetAlLCardsQuery} from "../../context/api-slices/cardsApi";

const CardsFeedContainer = () => {
  const {data, error, isLoading} = useGetAlLCardsQuery();
  console.log("Is Loading:", isLoading);
  let content;
  if (data && data.length > 0) {
    content = data.map((card, index) => <Card key={index} card={card}/>)
  } else {
    content = <div className={styles.noCards}>No cards found</div>
  }

  return (

    <div className={styles.cardsFeedContainer}>
      {content}
    </div>
  );
};

export default CardsFeedContainer;
