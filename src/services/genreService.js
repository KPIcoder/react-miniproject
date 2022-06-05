import {axiosService} from "./axiosService";
import {urls} from "../constants";

const genreService = {
    getGenres: () => axiosService.get(urls.genres),
}

export{genreService}
