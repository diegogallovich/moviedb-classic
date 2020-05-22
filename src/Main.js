import React from 'react';

import MovieSearch from './components/movieSearchComponent/MovieSearch';

class Main extends React.Component {
   render() {
      return (
         <div className='container'>
            <h1 className='title'>React Hooks Movie Search</h1>
            <MovieSearch />
            <div className='footer'>
               Developed by{' '}
               <a
                  href='https://github.com/dieguiviti'
                  rel='noopener noreferrer'
                  target='_blank'
               >
                  dieguiviti{' '}
                  <span role='img' aria-label='peace'>
                     &#9996;
                  </span>
               </a>
            </div>
         </div>
      );
   }
}

export default Main;
