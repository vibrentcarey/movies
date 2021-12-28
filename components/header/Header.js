import React from 'react';
import styles from './Header.module.scss';
import {SearchIcon, HomeIcon, HeartIcon} from '@heroicons/react/outline'
import Link from 'next/link';


const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href='/' passHref><HomeIcon className={styles.icon}/></Link>
        <Link href='/search' passHref><SearchIcon className={styles.icon}/></Link>
        <Link href='/favourites' passHref><HeartIcon className={styles.icon}/></Link>
      </nav>
    </header>
  );
};

export default Header;