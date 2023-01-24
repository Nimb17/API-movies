import { Link } from "react-router-dom";
import styles from "../styles/TrenMovie.css";

const TrenMovie = ({movie,width,height}) => {

const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <div className="trendMovies">
      <Link to={"/movies/"+movie.id}>
        {/* <h1>Trends Movies</h1> */}
        <img src={imageUrl}
             width={width} 
             height={height}
             alt="dgs" />
       </Link>

    </div>
  )
}

export default TrenMovie