import React from 'react';
import {posterBaseUrl} from "../../constants";
import './MovieCard.css'
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";

const MovieCard = ({movie}) => {

    const {title, poster_path, vote_average, id} = movie;

    const posterUrl = posterBaseUrl + poster_path;


    return (
        <div className={'MovieCardContainer'}>
            <Link  to={`${id}`}>
                <img src={posterUrl} alt="movie" width="200px"/>
                <h4 className={''}>{title}  {vote_average}<StarRatings rating={vote_average} numberOfStars={1}
                                                                             starDimension="20px" starRatedColor="rgb(253,210,35)" starEmptyColor="rgb(9,37,70)"/></h4>
            </Link>
        </div>
    );
};

export default MovieCard;
