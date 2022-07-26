import React from "react";
import Movie from "./Movie";
function MovieList(props)
{
    /*props.movies.map((movie) => (
        console.log(movie)));*/
    return (
        <ul >{
            props.movies.map((movie) => (
               
            <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
        ))
        }
        </ul>
     
       

   )

}

export default MovieList;