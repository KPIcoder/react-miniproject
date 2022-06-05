import axios from "axios";
import {baseURL} from "../constants";

const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjJhNTI0ZTRmMTY5NGI2OGNiZmE1NzQ4NTE5MGZmYSIsInN1YiI6IjYyOTg1ZTk2MWU5MjI1MDA5Y2UzNDBiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3alRA3A01mCDVTQzQHAQE8cmKrfPzLBPjIQczpcyzr0";

const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
});

export {axiosService}
