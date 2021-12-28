import { useSelector } from "react-redux";
import Results from "../components/results/Results";

const Favourites = () => {
  const favs = useSelector(state => state.movies);
  return (
    <main>
      <h1>Favourite Movies</h1>
      <Results results={favs} />
    </main>
  );
};

export default Favourites;