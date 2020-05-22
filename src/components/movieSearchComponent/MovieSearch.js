import React, { useState } from 'react';
import MovieCard from '../movieCardComponent/MovieCard';
import axios from 'axios';
import './style.css';

export default function MovieSearch() {
   // State - inputQuery, movies
   const [query, setQuery] = useState('');
   const [movies, setMovies] = useState([]);

   // Functionality
   const searchMovies = async (event) => {
      event.preventDefault();
      //const query = 'Jurassic Park';
      const url = `https://api.themoviedb.org/3/search/movie?api_key=f78a9381560780d7ee6cd9c0f75fbc19&query=${query}`;
      //
      try {
         const axiosResponse = await axios.get(url);
         //console.log(axiosResponse, 'response');
         const { data } = axiosResponse;
         setMovies(data.results);
         console.log(data.results);
         //
      } catch (error) {
         console.log(error);
      }
   };
   const handleOnChange = (event) => {
      setQuery(event.target.value);
   };

   // Rendered component
   return (
      <main>
         <form className='form' onSubmit={searchMovies}>
            <input
               className='search-bar'
               name='query'
               type='text'
               value={query}
               onChange={handleOnChange}
               placeholder='Search for a movie'
            />
            <label htmlFor='query' />

            <button className='button' type='submit'>
               Find Movie
            </button>
         </form>
         <div className='movie-list'>
            {movies.map((movie) => (
               <MovieCard movie={movie} key={movie.id} />
            ))}
         </div>
      </main>
   );
}
