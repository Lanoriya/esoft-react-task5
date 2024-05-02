import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"

export function DetailsPage() {
  const { id } = useParams();
  const film = useSelector(state => state.films.find(film => film.id === +id));

  if (!film) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>{film.title}</h2>
      <p>{film.full_description}</p>
    </div>
  )
};