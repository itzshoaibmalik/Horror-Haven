
import { Link } from 'react-router-dom';
import { Movie } from '@/data/movies';
import { Star, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface MovieCardProps {
  movie: Movie;
  featured?: boolean;
}

const MovieCard = ({ movie, featured = false }: MovieCardProps) => {
  return (
    <motion.div
      className={`movie-card film-grain ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/movie/${movie.id}`} className="block h-full">
        <div className="relative group aspect-[2/3] overflow-hidden">
          {/* Poster */}
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Overlay with info */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <h3 className="text-lg md:text-xl font-bold text-white mb-1">{movie.title}</h3>
            <p className="text-sm text-gray-300 mb-2">{movie.director} • {movie.year}</p>
            
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-horror-blood" />
                <span className="text-white">{movie.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-horror-blood" />
                <span className="text-white">{movie.duration} min</span>
              </div>
            </div>
            
            <div className="flex gap-2 mt-2 flex-wrap">
              {movie.genre.map((genre, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-horror-accent px-2 py-0.5 rounded"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
          
          {/* Always visible rating */}
          <div className="absolute top-2 right-2 bg-horror-accent/90 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
            <Star className="h-3 w-3 text-horror-blood" fill="#ea384c" />
            {movie.rating.toFixed(1)}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default MovieCard;
