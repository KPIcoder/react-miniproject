import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {HomePage, MoviePage, MoviesPage, NotFoundPage} from "./pages";


function App() {
    return (
        <Routes>
            <Route path={"/"} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'/movies/:id'} element={<MoviePage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
