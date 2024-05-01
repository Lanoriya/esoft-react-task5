import { FilmsList } from "./FilmsList/FilmsList";
import { FilmsFilter } from "./FilmsFilter/FilmsFilter";
import './styles/MainPage.css';

export function MainPage({ films }) {

  return (
    <div className="films-box">
      <FilmsFilter films={films}/>
      <FilmsList films={films}/>
    </div>
  )
};