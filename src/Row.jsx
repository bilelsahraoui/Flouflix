import React, { useEffect, useState } from 'react'
import './assets/row.scss'
import axios from 'axios'

const Row = ({title, url, isPoster}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies(){
            const response = await axios.get(url);

            setMovies(response.data.results);
        };
        fetchMovies();
    }, [url]); 

  return (
    <div className='row'>
        <div className='row_titre'>
            {title}
        </div> 
        <div className='row_images'>
            {movies.map((movie) => (
                <div key={movie.id} className='row_image'>
                    {isPoster ? (
                        <img src={"https://image.tmdb.org/t/p/original/"+movie.poster_path} alt={movie.title || movie.name} className='row_image' />
                    ) : (
                        <img src={"https://image.tmdb.org/t/p/original/"+movie.backdrop_path} alt={movie.title || movie.name} className='row_image' />
                    )}
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default Row