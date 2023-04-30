import styles from './dropdown.module.css';
import React, { FC } from 'react';
import avatar from './avatar.jpeg';
import arrow from './arrow.svg';

const Dropdown: FC = () => {
  function ToggleDropdown() {}

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropdownButton}
        onClick={ToggleDropdown}
      >
        <img
          className={styles.dropdownBdropdownAvatarutton}
          src={avatar}
          alt='Icon: avatar'
        />
        <img
          className={styles.dropdownArrow}
          src={arrow}
          alt='Icon: arrow'
        />
      </button>

      <div
        className={styles.dropdownContent}
        id='dropdownMenu'
      >
        <ul className={styles.dropdownListIcon}>
          <li className={styles.dropdownItemIcon}>
            <div className={styles.dropdownIcon}></div>
            <a
              className={styles.dropdownLink}
              href='#'
            ></a>
          </li>
        </ul>

        <ul className={styles.dropdownListText}>
          <li className={styles.dropdownItemText}>
            <a
              className={styles.dropdownLink}
              href='#'
            ></a>
          </li>
        </ul>

        <ul className={styles.dropdownListText}>
          <button className={styles.dropdownListButton}>
            <div className={styles.dropdownItemOut}></div>
            <p className={styles.dropdownItemEmail}></p>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
