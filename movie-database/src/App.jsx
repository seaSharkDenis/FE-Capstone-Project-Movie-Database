import { useState } from 'react';
import { searchMovies, getMovieDetails } from './services/movieApi';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query) => {
    setIsLoading(true);
    setError('');
    try {
      const results = await searchMovies(query);
      setMovies(results);
      setSelectedMovie(null);
    } catch (err) {
      setError(err.message);
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectMovie = async (id) => {
    setIsLoading(true);
    setError('');
    try {
      const movie = await getMovieDetails(id);
      setSelectedMovie(movie);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToList = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="min-h-screen bg-gray-6,0 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Movie Database</h1>
        
        <SearchBar onSearch={handleSearch} />
        
        {isLoading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
            <p className="mt-2">Loading...</p>
          </div>
        )}
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        {selectedMovie ? (
          <MovieDetails movie={selectedMovie} onBack={handleBackToList} />
        ) : (
          <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
        )}
      </div>
    </div>
  );
}