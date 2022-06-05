import React from 'react';
import {posterBaseUrl} from "../../constants";
import StarRatings from "react-star-ratings/build/star-ratings";
import {Link} from "react-router-dom";

const styles = {
    display: 'flex',
    columnGap: '20px',
    margin: '0 0 10px 30px',
    maxWidth: "700px"
}

const MovieHomePage = ({movie: {id, title, overview, poster_path: posterPath, vote_average: voteAverage}}) => {

    const posterUrl = posterBaseUrl + posterPath;

    return (
        <div style={styles}>
            <Link to={{pathname: `/movies/${id}`}}><img src={posterUrl} alt={title} width='150px'/></Link>
            <div>
                <h5>{title}</h5>
                <h5>{overview}</h5>
                <h5>{voteAverage} <StarRatings rating={voteAverage} numberOfStars={1}
                                              starDimension="10px" starRatedColor="rgb(253,210,35)"
                                              starEmptyColor="rgb(9,37,70)"/></h5>
                <hr style={{backgroundColor:'white'}}/>
            </div>
        </div>
    );
};

export {MovieHomePage};
