
import { useState } from 'react';
import Layout from '@/components/Layout';
import MovieCard from '@/components/MovieCard';
import MovieFilters from '@/components/MovieFilters';
import { getFilteredMovies } from '@/data/movies';

const MoviesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };
  
  const handleFilterChange = (genre: string) => {
    setSelectedGenre(genre);
  };
  
  const movies = getFilteredMovies(selectedGenre === 'All' ? undefined : selectedGenre, searchTerm);

  return (
    <Layout onSearch={handleSearch}>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="blood-text">Explore</span> Horror Movies
        </h1>
        
        <MovieFilters onFilterChange={handleFilterChange} />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        
        {movies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 mb-4">No movies found matching your criteria.</p>
            <div className="flex justify-center gap-4">
              {searchTerm && (
                <button 
                  onClick={() => handleSearch('')}
                  className="horror-button"
                >
                  Clear Search
                </button>
              )}
              {selectedGenre !== 'All' && (
                <button 
                  onClick={() => handleFilterChange('All')}
                  className="horror-button"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MoviesPage;
