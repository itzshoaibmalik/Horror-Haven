
import { useState, useEffect } from 'react';
import { Movie, getFeaturedMovies } from '@/data/movies';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, PlayCircle } from 'lucide-react';

const FeaturedMovies = () => {
  const [featured, setFeatured] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const featuredMovies = getFeaturedMovies();
    setFeatured(featuredMovies);

    // Auto rotate featured movies
    const interval = setInterval(() => {
      setCurrentIndex((current) => 
        current === featuredMovies.length - 1 ? 0 : current + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  if (featured.length === 0) return null;

  const currentMovie = featured[currentIndex];

  return (
    <section className="relative w-full bg-horror pb-12">
      <div className="relative aspect-[21/9] md:aspect-[21/7] w-full overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={currentMovie.poster} 
            alt={currentMovie.title}
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-horror via-horror/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-horror via-horror/90 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div 
            className="md:max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            key={currentMovie.id}
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 animate-flicker">
              {currentMovie.title}
            </h1>
            <div className="flex gap-2 mb-3">
              {currentMovie.genre.map((genre, i) => (
                <span key={i} className="bg-horror-accent/80 text-sm px-2 py-0.5 rounded">
                  {genre}
                </span>
              ))}
            </div>
            <p className="text-gray-300 md:text-lg mb-6 line-clamp-3">
              {currentMovie.synopsis}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to={`/movie/${currentMovie.id}`}
                className="horror-button flex items-center gap-2"
              >
                <PlayCircle size={20} />
                Watch Trailer
              </Link>
              <Link 
                to={`/movie/${currentMovie.id}`}
                className="text-white hover:text-horror-blood flex items-center gap-1 transition-colors"
              >
                More Details
                <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dots navigation */}
      {featured.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {featured.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-horror-blood' 
                  : 'bg-horror-light hover:bg-horror-blood/50'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedMovies;
