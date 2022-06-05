import React from 'react';
import {Outlet} from "react-router-dom";
import {MoviesList} from "../../components";

const MoviesPage = () => {
    return (
        <div>
            <div><MoviesList/></div>
            {/*<div><Outlet/></div>*/}
        </div>
    );
};

export {MoviesPage};
