import React from 'react';
import {posterBaseUrl} from "../../constants";
import './MovieDetails.css'
import StarRatings from "react-star-ratings/build/star-ratings";

const MovieDetails = ({movie}) => {

    let {
        title,
        budget,
        genres,
        overview,
        popularity,
        poster_path: posterPath,
        release_date: releaseDate,
        runtime,
        vote_average: voteAverage,
        vote_count: voteCount
    } = movie;

    const posterUrl = posterBaseUrl + posterPath;

    genres = genres.map(genre => genre.name).join(', ');

    const minutesToHours = (minutes) => {
        let hours = 0;
        while (minutes >= 60) {
            hours++;
            minutes -= 60;
        }
        return `${hours} h ${minutes} m`;
    }

    runtime = minutesToHours(runtime);

    return (
        <div className={'MovieDetailsContainer'}>
            <img src={posterUrl} alt="movie" width="330px"/>
            <div>
                <div style={{marginTop: ""}}>Title: {title}</div>
                <div>Release Date: {releaseDate}</div>
                <div>Runtime: {runtime}</div>
                <div>Overview: {overview}</div>
                <div>Genres: {genres}</div>
                <div>Budget: {budget}$</div>
                <div>Popularity: {popularity}</div>
                <div>
                    <div>Rate:</div> <StarRatings  rating={voteAverage} numberOfStars={10}
                                        starDimension="20px" starRatedColor="rgb(253,210,35)" starEmptyColor="rgb(9,37,70)"/></div>
                <div style={{position:'relative', top: '-40px'}}>Vote: {voteAverage} <span style={{marginLeft: "30px"}}>All Votes Count: {voteCount}</span></div>
            </div>
        </div>
    );
};

export {MovieDetails};
