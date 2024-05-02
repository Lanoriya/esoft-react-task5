import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function FilmsList() {
  const navigate = useNavigate();
  const films = useSelector(state => state.films);

  const handleFilmClick = (film) => {
    navigate(`/film/${film}`);
  };

  if (!films || films.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="films-container">
      {films.map((film) => (
        <div
          onClick={() => {handleFilmClick(film.id)}}
          key={film.id}
          className="film-item flex flex-col rounded-lg bg-[#181a1b] text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row">
          <img
            className="film-logo h-96 w-80 rounded-t-lg object-cover md:h-auto md:w-36 md:!rounded-none md:!rounded-s-lg"
            src={film.image}
            alt={film.title}
          />
          <div className="flex flex-col justify-start p-6" style={{ width: '100%' }}>
            <h5 className="mb-2 text-xl font-medium">{film.title}</h5>
            <p className="mb-4 text-base">{film.short_description}</p>
            <p className="text-xs text-surface/75 dark:text-neutral-300">{film.genres.join(', ')}</p>
            <p className="text-xs text-surface/75 dark:text-neutral-300">{film.actors.join(', ')}</p>
            <p className="text-xs text-surface/75 dark:text-neutral-300">{film.rating}/10</p>
            <p className="text-xs text-surface/75 dark:text-neutral-300 last">{''}
              <button className="text-primary [&amp;>svg]:h-5 [&amp;>svg]:w-5" title="Excellent" data-twe-rating-icon-ref="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                </svg>
              </button>
              <button className="text-primary [&amp;>svg]:h-5 [&amp;>svg]:w-5" title="Excellent" data-twe-rating-icon-ref="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </button>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
};