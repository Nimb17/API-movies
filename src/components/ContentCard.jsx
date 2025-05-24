import Card from "./Card";
import styles from "../styles/ContentCard.css";
import { useEffect, useState } from "react";
import { get } from "../data/dataAPI";
import TrendMovie from "./TrenMovie";
import portada from "../assets/portada.webp"

const ContentCard = () => {
  
  const [movies, SetMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      SetMovies(data.results);      
    });
  }, []);

  return (
    <div className="contentCard">
      <div className="contentCard__img" >
        <h1 className="contentCard__heroTitle">-API movies-</h1>
        <img src={portada} width="1500" alt="" />
      </div>

<div className="contentCard__mainTitle">Trending Movies</div>

      <div className="contentCard__trend">
        
         {movies.map((movie) => (
        <TrendMovie movie={movie} 
                    key={movie.id}
                    width="230" 
                    height="350"   />
      ))}
      </div>     
      <div className="contentCard__mainTitle">Top Movies</div>
      
            <div className="contentCard__movies">
               {movies.map((movie) => (
        <Card movie={movie}
              key={movie.id}    />
      ))}
            </div>
     
    </div>
  );
};

export default ContentCard;
