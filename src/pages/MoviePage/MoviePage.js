import React, {useEffect, useState} from 'react';
import {MovieDetails} from "../../components";
import {movieService} from "../../services";

const MoviePage = () => {

    const id = (window.location.href).split('/').pop();
    const [movie, setMovie] = useState(null);
    console.log(id);

    useEffect(() => {
        movieService.getMovieById(id).then(({data}) => setMovie(data));
    }, [id]);
    console.log(movie);

    return (
        <div>
            {movie && <MovieDetails key={id} movie={movie}/>}
        </div>
    );
};

export {MoviePage};
