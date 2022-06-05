import React, {useEffect} from 'react';
import './MovieList.css'
import MovieCard from "../MovieCard/MovieCard";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import {useSearchParams} from "react-router-dom";

const MoviesList = () => {

    const {ids} = useSelector(state1 => state1.genres);
    const genreIds = ids.join(', ');
    console.log(genreIds);
    const {movies, page, totalPages} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [queryPage, setQueryPage] = useSearchParams({page:'1'});


    useEffect(() => {
        dispatch(movieActions.getMovies({page:queryPage.get('page'), genres: genreIds}))
    }, [queryPage, genreIds]);


    const nextPage = () => {
        setQueryPage({page:`${+queryPage.get('page') + 1}`});
    }

    const prevPage = () => {
        setQueryPage({page:`${+queryPage.get('page') - 1}`});
    }

    return (
        <div>
            <div className={'movieListWrap'}>
                {movies && movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
            <hr/>
            <div>
                <button disabled={page===1} onClick={prevPage}>Previous</button>
                <button disabled={page>=totalPages || page >= 500} onClick={nextPage}>Next</button>
            </div>
        </div>
    );
};

export {MoviesList};
