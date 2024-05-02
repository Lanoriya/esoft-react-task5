import { FilmsList } from "./FilmsList/FilmsList";
import { FilmsFilter } from "./FilmsFilter/FilmsFilter";
import './styles/MainPage.css';

export function MainPage() {

  return (
    <div className="films-box">
      <FilmsFilter />
      <FilmsList />
    </div>
  )
};