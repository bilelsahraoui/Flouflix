const API_KEY = '74ce86a5f215a2b77e3e6dbff257228f';
const URL = 'https://api.themoviedb.org/3'

const req = {
    fetchTrending: `${URL}/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals: `${URL}/trending/all/week?api_key=${API_KEY}`,
    fetchTopRated: `${URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${URL}/discover/movie?api_key=${API_KEY}&width_genres=28`,
    fetchComedyMovies: `${URL}/discover/movie?api_key=${API_KEY}&width_genres=35`,
    fetchHorrorMovies: `${URL}/discover/movie?api_key=${API_KEY}&width_genres=27`,
    fetchRomanceMovies: `${URL}/discover/movie?api_key=${API_KEY}&width_genres=10749`,
    fetchDocumentaries: `${URL}/discover/movie?api_key=${API_KEY}&width_genres=99`,
}

export default req;