import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genreAction} from "../../redux";
import {GenresCheckbox} from "../GenresCheckbox/GenresCheckbox";
import {Link} from "react-router-dom";

const GenresList = () => {

    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(genreAction.getGenres())
    }, [])


    return (
        <div>
            <h4>Genres:</h4>
            {genres && genres.map(genre => <div key={genre.id}> {genre.name} <GenresCheckbox key={genre.id} genre={genre}/></div>)}
            <Link to={'/movies'}>
                <button style={{margin:"15px 0"}}>Search</button>
            </Link>
        </div>
    );
};

export {GenresList};
