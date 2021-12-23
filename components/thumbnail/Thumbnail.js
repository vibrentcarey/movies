import Image from 'next/image';
import React from 'react';
import styles from './Thumbnail.module.scss';

const Thumbnail = ({ image, title, release, rank, poster }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original'
  return (
    <article className={styles.thumbnail}>
      <Image layout='responsive' height={150}  width={250} src={`${BASE_URL}${image || poster}`} alt='movie image' className={styles.image}/>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.details}>Release Date: <span className={styles.info}>{release}</span> </p>
      <p className={styles.details}>Rating: <span className={styles.info}>{rank}</span></p>
    </article>
  );
};

export default Thumbnail;