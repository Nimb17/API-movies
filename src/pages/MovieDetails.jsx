import styles from "../styles/MovieDetails.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { get } from "../data/dataAPI";
import {getMovieImg} from "../utils/getMovieImg"
import TrendMovie from "../components/TrenMovie";


const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);
  const [movies, SetMovies] = useState([]);

 useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      console.log(data)
    });
  }, [movieId]);  

  useEffect(() => {
    get("/discover/movie").then((data) => {
      SetMovies(data.results);      
    });
  }, []);

  const imageUrl = getMovieImg (movie.poster_path, 500)

  return (
  <div className="containerDetails">
    <div className="containerDetails__divImg">
      <img className="containerDetails__img" src={imageUrl} 
                                              width="500"
                                            alt={movie.title}/>
    </div>

    <div className="containerDetails__divText">

      <div className="containerDetails__text">
        
        <h1 className="containerDetails__title">{movie.title}</h1>
      <h3 className="containerDetails__tagLine">{movie.tagline}</h3>
      <p className="containerDetails__overView">{movie.overview}</p>
      </div>
      

      <div className="container__trend2">      
        
        {movies.map((movie) => (
       <TrendMovie movie={movie} 
                   key={movie.id}
                   width="150"
                   height="200"    />
     ))}
     </div>  
      
    </div>    
   

    


  </div>)
};

export default MovieDetails;
