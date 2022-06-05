import React from 'react';
import {GenresList, MoviesHomePage} from "../../components";

const HomePage = () => {
    return (
        <div style={{display:"flex"}}>
            <GenresList/>
            <MoviesHomePage/>
        </div>
    );
};

export  {HomePage};
