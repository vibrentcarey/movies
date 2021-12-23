import { useRouter } from 'next/router';
import React from 'react';
import requests from '../../utils/requests';
import styles from './Nav.module.scss'

const Nav = () => {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      {Object.entries(requests).map(([key, { title, url }]) => (
        // Will add the key as a url query param 
        <h2 onClick={() => router.push(`/?genre=${key}`)} className={styles.link} key={key}>{title}</h2>
      ))}
    </nav>
  );
};

export default Nav;