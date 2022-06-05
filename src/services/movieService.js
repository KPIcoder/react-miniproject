import {axiosService} from "./axiosService";
import {urls} from "../constants";


const movieService = {
    getMovies: (page = 1, ids = "") => axiosService.get(urls.movies, {
        params: {
            page,
            with_genres: ids
        }
    }),
    getMovieById: (id) => axiosService.get(`${urls.movie}/${id}`),
    getPopularMovies: () => axiosService.get(urls.popularMovies)
}

export {movieService}
