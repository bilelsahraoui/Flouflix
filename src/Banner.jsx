import React from 'react'
import './assets/banner.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import axios from 'axios';
import requests from './assets/axios';
import { useState, useEffect } from 'react';

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchMovie(){
            const response = await axios.get(requests.fetchTrending);
        
            setMovie(
                response.data.results[
                    Math.floor(Math.random() * response.data.results.length - 1)
                ]
            );
        }
        fetchMovie();
        
    }, []);

    function reduceText(text, nb){
        return text?.length > nb ? text.substr(0, nb - 1) + "..." : "Pas de description";
    };

    const bannerBg = {
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    };

  return (
    <header className='banner' style={bannerBg}>
        <div className="banner_content">
            <h1 className="banner_title">
                {movie.title || movie.name}
            </h1>
            <p className="banner_desc">
                {reduceText(movie.overview, 100)}
            </p>
            <div className="banner_actions">
                <button className="banner_action banner_action_play"> <PlayArrowIcon /> Lecture</button>
                <button className="banner_action banner_action_more"> <InfoIcon /> Plus d'infos</button>
            </div>
        </div>
    </header>
  )
}

export default Banner