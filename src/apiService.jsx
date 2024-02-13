const API_BASE_URL = 'https://api.themoviedb.org/3/discover/movie';
const API_DETAIL_URL = 'https://api.themoviedb.org/3'
const API_SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchMoviesByQuery = async (query) => {
  try {
    const response = await fetch(`${API_SEARCH_URL}?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

const fetchDefaultMovies = async () => {
  const defaultUrl = `${API_BASE_URL}?api_key=${API_KEY}`;
  try {
    const response = await fetch(defaultUrl);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching default movies:', error);
    throw error;
  }
};

const fetchMovieDetails = async (movieId) => {
  try {
    const response = await fetch(`${API_DETAIL_URL}/movie/${movieId}?api_key=${API_KEY}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export { fetchMoviesByQuery, fetchMovieDetails, fetchDefaultMovies };
