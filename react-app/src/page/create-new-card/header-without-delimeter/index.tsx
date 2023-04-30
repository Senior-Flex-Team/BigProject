import React, { FC } from 'react';
import styles from '../header-without-delimeter/header-without-delimeter.module.css';
import { MainLogo } from '../../../components/logos/main-logo';
import { NotificationLogo } from '../../../components/logos/notification-logo';
import { ArrowLogo } from '../../../components/logos/arrow-logo';

export const HeaderWithoutDelimiter: FC = () => {
  return (
    <header className={`${styles.header} ${styles.headerHeight}`}>
      <div className={styles.headerContainer}>
        <div className={styles.leftSide}>
          <div className={styles.logo}>
            <MainLogo></MainLogo>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.publishButton}>Publish</div>
          <div className={styles.notificationLogo}>
            <NotificationLogo></NotificationLogo>
          </div>
          <div className={styles.profile}>
            <div className={styles.imageContainer}>
              <img
                alt='Dmitriy Senko'
                className='s cm ch ci cj cn'
                src='https://miro.medium.com/v2/resize:fill:64:64/0*3feSGtjH5eHrVirF'
                width='32'
                height='32'
                loading='lazy'
              />
            </div>
            <ArrowLogo />
          </div>
        </div>
      </div>
    </header>
  );
};
