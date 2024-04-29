import './Films.css';

export function FilmsList({ films }) {

  return (
    <div className="films-container">
      {films.map((film) => (
        <div
          key={film.id}
          className="film-item flex flex-col rounded-lg text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row">
          <img
            className="film-logo h-96 w-80 rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
            src={film.image}
            alt={film.title}
          />
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-xl font-medium">{film.title}</h5>
            <p className="mb-4 text-base">{film.short_description}</p>
            <p className="text-xs text-surface/75 dark:text-neutral-300">{film.genres.join(', ')}</p>
            <p className="text-xs text-surface/75 dark:text-neutral-300">{film.actors.join(', ')}</p>
            <p className="text-xs text-surface/75 dark:text-neutral-300">{film.rating}/10</p>
          </div>
        </div>
      ))}
    </div>
  )
};