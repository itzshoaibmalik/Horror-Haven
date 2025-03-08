
import { useState, useEffect } from 'react';
import { getAllGenres } from '@/data/movies';

interface MovieFiltersProps {
  onFilterChange: (genre: string) => void;
}

const MovieFilters = ({ onFilterChange }: MovieFiltersProps) => {
  const [genres, setGenres] = useState<string[]>([]);
  const [selectedGenre, setSelectedGenre] = useState('All');

  useEffect(() => {
    const allGenres = getAllGenres();
    setGenres(allGenres);
  }, []);

  const handleGenreClick = (genre: string) => {
    setSelectedGenre(genre);
    onFilterChange(genre);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Browse by Genre</h2>
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <button
            key={genre}
            className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
              selectedGenre === genre 
                ? 'bg-horror-blood text-white' 
                : 'bg-horror-accent text-gray-300 hover:bg-horror-light'
            }`}
            onClick={() => handleGenreClick(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieFilters;
