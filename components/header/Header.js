import React from 'react';
import styles from './Header.module.scss';
import {SearchIcon, HomeIcon} from '@heroicons/react/outline'


const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <HomeIcon className={styles.icon}/>
        <SearchIcon className={styles.icon}/>
      </nav>
    </header>
  );
};

export default Header;