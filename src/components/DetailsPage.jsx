import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FilmComments from "./FilmComments/FilmComments";

export function DetailsPage() {
  const { id } = useParams();
  const film = useSelector(state => state.films.find(film => film.id === +id));
  const allFilms = useSelector(state => state.films);

  if (!film) {
    return <div>Загрузка...</div>
  }

  const similarFilms = allFilms.filter((f) => {
    if (f.id === film.id) {
      return false;
    }

    // Подсчет количества совпадающих жанров
    const commonGenres = f.genres.filter(genre => film.genres.includes(genre));

    // Условие для фильтрации
    let condition = false;

    if (film.genres.length === 1) {
      // Если у текущего фильма один жанр, то фильтруем по фильмам с одинаковым жанром
      condition = commonGenres.length === 1;
    } else {
      // Если у текущего фильма более одного жанра, то фильтруем по фильмам с двумя общими жанрами
      condition = commonGenres.length >= 2;
    }

    return condition;
  });

  return (
    <>
      <img
        className="film-logo-details h-96 w-80 mx-auto object-cover md:h-auto md:w-36 md:!rounded-none"
        src={film.image}
        alt={film.title}
      />
      <h2>{film.title}</h2>
      <p>{film.rating}</p>
      <p>{film.actors.join(', ')}</p>
      <p>{film.full_description}</p>
      <p>{film.genres.join(', ')}</p>
      <h2 className="text-xl mt-8">Похожие фильмы:</h2>
      <div className="similarFilms flex gap-8 flex-wrap">
        {similarFilms.map((similarFilm) => (
          <div className="similarFilms-item text-center flex flex-col items-center w-1/4" key={similarFilm.id}>
            <img
              className="film-logo h-60 w-48"
              src={similarFilm.image}
              alt={similarFilm.title}
            />
            <div className="similarFilms-about">
              <h4 className="text-xl">{similarFilm.title}</h4>
              <p>{similarFilm.genres.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
      <FilmComments filmId={id}/>
    </>
  )
};