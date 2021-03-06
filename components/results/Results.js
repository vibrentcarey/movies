import React from 'react';
import Thumbnail from '../thumbnail/Thumbnail';
import styles from './Results.module.scss';

const Results = ({ results }) => {
  return (
    <section className={styles.container}>
      {results && results.map(movie => {
        return movie &&  <Thumbnail key={movie.title} image={movie.backdrop_path} poster={movie.poster_path} title={movie.title || movie.name || movie.original_name} release={movie.release_date} rank={movie.vote_average} fav={movie.fav} />
      })}
    </section>
  );
};

export default Results;

