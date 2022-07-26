import React, { useState } from 'react';
import './App.css';
import AddMovie from './component/AddMovie';
import MovieList from './component/MovieList';
import Button from './component/Button';

function App() {
  const [movies,setMovies]=useState([]);

  function fetchMoviesHandler() {
    
    fetch('https://react-movies-112a8-default-rtdb.firebaseio.com/movies.json').then((response) => { return response.json()}).then((data)=>{
    const transformedMovie = [];  
    for(const property in data) {
   
      transformedMovie.push({id: property, ...data[property]});
      
      }
     
      setMovies(transformedMovie);
      
  }).catch(function () {
      console.log('Some error has occurred');
  });
  
   
  }


  const AddMovieHandler = async (data) => {
    const response = await fetch('https://react-movies-112a8-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data11 = await response.json();
    console.log("app js", data11);
  }
  return (
    <React.Fragment>
      <section>
        <Button onClick={fetchMoviesHandler}>Movies</Button>
      </section>
      <section>
        <MovieList movies={movies}></MovieList>
      </section>
      <section>

        <AddMovie onAddMovie={AddMovieHandler}></AddMovie>

      </section>

    </React.Fragment>

  );
}

export default App;
