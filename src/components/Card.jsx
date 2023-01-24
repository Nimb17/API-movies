import { Link } from "react-router-dom";
import styles from "../styles/Card.css";

const Card = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  
  return (
    <Link to={"/movies/"+movie.id}>
    <div className="card">
      <img width={180} src={imageUrl} alt={movie.title} />

      <p className="card__title"> {movie.title}</p>
    </div>
    </Link>
  );
};

export default Card;
