import React from 'react';
import './style.css';

export default function MovieCard({ movie }) {
   return (
      <div className='movie-card'>
         <div className='card-image'>
            <img
               src={
                  movie.poster_path
                     ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`
                     : `https://1.hdtvsmovies.stream/assets/lp02/img/no_poster.jpg`
               }
               alt={movie.original_title + ' poster'}
            />
         </div>
         <div className='card-content'>
            <h3 className='card-title'>{movie.title}</h3>
            <div className='card-meta'>
               <p>
                  <small>
                     Realease date: <strong>{movie.release_date}</strong>
                  </small>
               </p>
               <p>
                  <small>
                     Rating: <strong>{movie.vote_average}/10 &#9733;</strong>
                  </small>
               </p>

               <div className='card-desktop'></div>
            </div>
            <p className='card-description'>{movie.overview}</p>
         </div>
      </div>
   );
}
