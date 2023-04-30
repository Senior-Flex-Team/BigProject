import React, { FC } from 'react';
import styles from './new-card-content.module.css';
import { TextArea } from '../text-area';

export const NewCardContent: FC = () => {
  return (
    <div className={styles.container}>
      <TextArea className={styles.title}>Lets go</TextArea>
      <TextArea className={styles.description}>
        I dont know how to live this live
      </TextArea>
    </div>
  );
};
