import Image from 'next/image';
import React, { useState } from 'react';
import styles from './Thumbnail.module.scss';
import { HeartIcon} from '@heroicons/react/outline'
import { useDispatch } from 'react-redux';

const Thumbnail = ({ image, title, release, rank, poster, fav }) => {
  const [added, setAdded] = useState(false)
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  const dispatch = useDispatch();
  const handleLike = (movie) => {
    dispatch({type: 'ADD', movie})
    setAdded(true);
    setTimeout(() => {
      setAdded(false)
    }, 3000)
  }
  return (
    <article className={styles.thumbnail}>
      <Image layout='responsive' height={150}  width={250} src={`${BASE_URL}${image || poster}`} alt='movie image' className={styles.image}/>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.details}>Release Date: <span className={styles.info}>{release}</span> </p>
      <p className={styles.details}>Rating: <span className={styles.info}>{rank}</span></p>
      {added && <p className={styles.error}>Added to favourites</p>}
      <HeartIcon className={fav ? styles.fav : styles.icon} onClick={() => handleLike({title, backdrop_path: image, release_date: release, vote_average: rank, poster_path: poster, fav:true})}/>
      
    </article>
  );
};

export default Thumbnail;