import styles from "./CardsFeedContainer.module.css"
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState, TEST_GetAllCards} from "../../context/store";
import Card from "../Card/Card";

const CardsFeedContainer = () => {
  const cardsFeed = useSelector((state: RootState) => state.cardsFeed)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(TEST_GetAllCards())
  }, []);

  return (
    <div className={styles.cardsFeedContainer}>
      {cardsFeed.cards.map((card,index) => <Card key={index} card={card} />)}
    </div>
  );

};

export default CardsFeedContainer;
