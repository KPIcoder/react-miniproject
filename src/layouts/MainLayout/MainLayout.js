import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import './MainLayout.css'
import {useDispatch} from "react-redux";
import {genreAction} from "../../redux";

const MainLayout = () => {

    const dispatch = useDispatch();

    function resetIds() {
        dispatch(genreAction.reset())
    }

    const rootEl = document.getElementById('body');
    rootEl.style.backgroundColor = 'white';


    const changeTheme = () => {
        rootEl.style.backgroundColor = (rootEl.style.backgroundColor === "white") ? "#343434" : "white";
        const changeThemeBtn = document.getElementsByClassName('btnChangeTheme')[0]
        if(rootEl.style.backgroundColor === "white") {
            changeThemeBtn.style.backgroundColor = "#343434";
            changeThemeBtn.style.border = "2px solid white"
        } else {
            changeThemeBtn.style.backgroundColor = "white";
            changeThemeBtn.style.border = "2px solid black"
        }
    }

    return (
        <div>
            <header className={'header'}>
                <button className={'btnChangeTheme'} onClick={changeTheme}></button>
                <NavLink to={'/home'} onClick={resetIds}>TheMoviesDB</NavLink>
                <NavLink to={'/movies'} onClick={resetIds}>Movies</NavLink>
                <div style={{display:"flex", alignItems:"center", columnGap:'10px'}}>
                    <h4 style={{color:'snow'}}>User</h4>
                    <div style={{color:'snow', height:'40px', width:'40px', border:"2px solid snow", borderRadius:'50%', boxSizing:'border-box', padding:'8px 0 0 2px', fontSize:'15px'}}>Logo</div>
                </div>
            </header>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
