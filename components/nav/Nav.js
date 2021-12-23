import React from 'react';
import requests from '../../utils/requests';
import styles from './Nav.module.scss'

const Nav = () => {
  console.log(Object.entries(requests));
  return (
    <nav className={styles.nav}>
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h2 className={styles.link} key={key}>{title}</h2>
      ))}
    </nav>
  );
};

export default Nav;