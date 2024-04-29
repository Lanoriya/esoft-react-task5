import { useEffect, useState } from "react";
import { FilmsList } from "./FilmsList/FilmsList";
import { Tooltip, initTWE } from "tw-elements";
import { FilmsFilter } from "./FilmsFilter/FilmsFilter";
import './styles/MainPage.css';

export function MainPage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    initTWE({ Tooltip });
  }, []);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Lanoriya/json-values/main/films.json')
      .then(response => response.json())
      .then((data) => {
        setFilms(data)
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="films-box">
      <FilmsFilter films={films}/>
      <FilmsList films={films}/>
    </div>
  )
};