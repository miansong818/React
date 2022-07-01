import React from "react";

// const movie = {
//     Poster: "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
//     Title: "Italian Spiderman",
//     Type: "movie",
//     Year: "2007",
//     imdbID: "tt2705436",
//     };
const MovieCard = ({movie}) => {
    return (
        <div className='movie'>
          <div>
            <p>{movie.Year}</p>
          </div>

          <div>
            <img src={movie.Poster !=='N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
          </div>

          <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </div>
        </div>
    );
}

export default MovieCard;