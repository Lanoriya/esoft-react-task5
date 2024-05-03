import { FilmsList } from "./FilmsList/FilmsList";
import { FilmsFilter } from "./FilmsFilter/FilmsFilter";
import { Link } from "react-router-dom";


export function MainPage() {

  return (
    <div className="flex gap-8">
      <FilmsFilter />
      <FilmsList />
      <Link to='/search' className="inline-block h-9 m-4 rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">Поиск</Link>
    </div>
  )
};