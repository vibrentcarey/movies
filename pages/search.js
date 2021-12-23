import axios from 'axios';
import React, { useRef, useState } from 'react';
import Results from '../components/results/Results';
import styles from '../styles/Search.module.scss'

const Search = () => {
  const [movies, setMovies] = useState([]);
  const movieRef = useRef('');
  const [inputIsValid, setInputIsValid] = useState(true);
  const API_KEY = process.env.API_KEY;

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const movie = movieRef.current.value;

    if (movie.length < 3) {
      setInputIsValid(false)
      setTimeout(() => {
        setInputIsValid(true)
      }, 3000)
      return
    }
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}`)
      setMovies(response.data.results);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <section className={styles.search}>
      <h1 className={styles.title}>Find A Movie</h1>

      <form className={styles.form} onSubmit={handleFormSubmit}>
      <label htmlFor='movie'>Movie Search</label>
        <input autoComplete="off" placeholder='Enter Movie Title' className={styles.input} ref={movieRef} id='movie'/>
        {!inputIsValid && <p className={styles.error}>Please enter at least 3 characters</p>}
        <button className={styles.button}>Search</button>
      </form>
      {movies.length === 0 ? <p>No Movies</p> : <Results results={movies} />}
    </section>
  );
};

export default Search;