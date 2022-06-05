import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genreAction} from "../../redux";

const GenresCheckbox = ({genre: {id}}) => {

    const {ids} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    const addId = id => {
        if (ids.includes(id)){
            dispatch(genreAction.deleteId(id))
        }
        else
            dispatch(genreAction.addId(id))
    }

    return (
        <input type="checkbox" onChange={() => addId(id)}>

        </input>
    );
};

export {GenresCheckbox};
