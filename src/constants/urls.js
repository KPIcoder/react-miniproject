const baseURL = process.env.REACT_APP_API;
const urls = {
    movie: '/movie',
    movies: '/discover/movie',
    popularMovies:'/movie/popular',
    genres: '/genre/movie/list',

}
const posterBaseUrl = 'https://image.tmdb.org/t/p/original/';

export {baseURL, urls, posterBaseUrl};
