import { useSelector } from "react-redux";
import Results from "../components/results/Results";
import styles from '../styles/Favourites.module.scss'
import { removeDuplicates } from "../utils/utility";

const Favourites = () => {
  const favs = useSelector(state => state.movies);
  const uniqueFavs = removeDuplicates(favs);
  console.log(uniqueFavs);
  return (
    <main className={styles.favourites}>
      <h1 className={styles.title}>Favourite Movies</h1>
      {uniqueFavs.length > 0 ? <Results results={uniqueFavs} /> : <p className={styles.text}>No favourites yet...</p>}
    </main>
  );
};

export default Favourites;