import React from "react";
import "./Movie.css";

function Movie({src,name,clas}) {
  return (
    <a href="#" className={clas ? 'movie_container first_slide' : 'movie_container'}>
      <img src={src} alt={name} />
      <div className="movie_description">
        <h5 className="movie_date">FALL 2021</h5>
        <h2 className="movie_name">{name}</h2>
        <div className="dashes">- - - - - - -</div>
        <a href="#" className="movie_button">
          COMING SOON
        </a>
      </div>
    </a>
  );
}

export default Movie;
