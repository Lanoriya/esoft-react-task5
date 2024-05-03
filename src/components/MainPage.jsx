import { FilmsList } from "./FilmsList/FilmsList";
import { FilmsFilter } from "./FilmsFilter/FilmsFilter";

export function MainPage() {

  return (
    <div className="flex gap-8">
      <FilmsFilter />
      <FilmsList />
    </div>
  )
};