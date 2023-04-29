import { type FC } from 'react';

import { MainLogo } from '../logos/main-logo';

import { SearchLogo } from '../logos/search-logo';
import { WriteLogo } from '../logos/write-logo';
import { NotificationLogo } from '../logos/notification-logo';
import { ArrowLogo } from '../logos/arrow-logo';

import styles from './header.module.css';

export const Header: FC = () => {
    return (
        <>
            <div className={styles.headerHeight}></div>
            <header className={`${styles.header} ${styles.headerHeight}`}>
                <div className={styles.leftSide}>
                    <div className={styles.logo}>
                        <MainLogo></MainLogo>
                    </div>
                    <label
                        className={styles.search}
                        htmlFor={styles.searchInput}
                    >
                        <SearchLogo />
                        <input
                            className={styles.searchInput}
                            id={styles.searchInput}
                            type='text'
                            placeholder='Search'
                        />
                    </label>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.addNewPost}>
                        <WriteLogo />
                        <div className={styles.addNewPostText}>Write</div>
                    </div>
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
            </header>
        </>
    );
};
