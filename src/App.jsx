import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Search from './Search';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import Footer from './Footer';
import { fetchMoviesByQuery, fetchMovieDetails, fetchDefaultMovies } from './apiService';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentView, setCurrentView] = useState('list');

  useEffect(() => {
    const loadDefaultMovies = async () => {
      const data = await fetchDefaultMovies();
      setMovies(data.results);
    };

    loadDefaultMovies();
  }, []);

  const handleSearch = async (query) => {
    if (query) {
      const data = await fetchMoviesByQuery(query);
      setMovies(data.results);
    } else {
      const data = await fetchDefaultMovies();
      setMovies(data.results);
    }
  };

  const handleMovieSelect = async (movieId) => {
    const movie = await fetchMovieDetails(movieId);
    setSelectedMovie(movie);
    setCurrentView('detail');
  };

  const handleBackToList = () => {
    setCurrentView('list');
  };

  return (
    <div id="root">
      <Navigation />
      <div className="app-container">
      <div className="content">
        {currentView === 'list' && (
          <>
            <Search onSearch={handleSearch} />
            <MovieList movies={movies} onSelectMovie={handleMovieSelect} />
          </>
        )}
        {currentView === 'detail' && (
          <MovieDetail movie={selectedMovie} onBack={handleBackToList} />
        )}
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
