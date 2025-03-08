
import { useState } from 'react';
import Layout from '@/components/Layout';
import FeaturedMovies from '@/components/FeaturedMovies';
import MovieCard from '@/components/MovieCard';
import { getFilteredMovies } from '@/data/movies';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };
  
  // Get a limited set of movies for the homepage
  const movies = getFilteredMovies(undefined, searchTerm).slice(0, 6);

  return (
    <Layout onSearch={handleSearch}>
      <FeaturedMovies />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="blood-text">Latest</span> Horror Movies
          </h2>
          <Link 
            to="/movies" 
            className="flex items-center gap-1 text-sm text-horror-blood hover:text-horror-blood/80 transition-colors"
          >
            View All <ChevronRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        
        {movies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 mb-4">No movies found matching your search.</p>
            {searchTerm && (
              <button 
                onClick={() => handleSearch('')}
                className="horror-button"
              >
                Clear Search
              </button>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Index;
