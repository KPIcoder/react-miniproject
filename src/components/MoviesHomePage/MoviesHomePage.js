import React, {useEffect, useState} from 'react';
import {movieService} from "../../services";
import {MovieHomePage} from "../MovieHomePage/MovieHomePage";

const MoviesHomePage = () => {

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        movieService.getPopularMovies().then(({data}) => setPopularMovies(data.results.slice(0,5)))
    }, [])

    return (
        <div>
            <h3 style={{textAlign:'center'}}>Popular Today:</h3>
            {popularMovies && popularMovies.map(movie => <MovieHomePage key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesHomePage};
