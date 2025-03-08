
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Movie, getMovieById } from '@/data/movies';
import { Star, Clock, Calendar, User, ArrowLeft, PlayCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      try {
        const movieId = parseInt(id);
        const foundMovie = getMovieById(movieId);
        
        if (foundMovie) {
          setMovie(foundMovie);
        } else {
          setError('Movie not found');
        }
      } catch (err) {
        setError('Invalid movie ID');
      } finally {
        setLoading(false);
      }
    }
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <p>Loading movie details...</p>
        </div>
      </Layout>
    );
  }

  if (error || !movie) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-horror-blood mb-4">Error</h2>
          <p className="mb-6">{error || 'Movie not found'}</p>
          <Link to="/movies" className="horror-button inline-flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to Movies
          </Link>
        </div>
      </Layout>
    );
  }

  const formatTrailerUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  return (
    <Layout>
      <div className="relative">
        {/* Background header with movie poster */}
        <div className="relative h-[40vh] md:h-[50vh] overflow-hidden film-grain">
          <img 
            src={movie.poster} 
            alt={movie.title}
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-horror-dark via-horror-dark/90 to-horror/60"></div>
        </div>
        
        {/* Movie details content */}
        <div className="container mx-auto px-4 relative -mt-48 md:-mt-64 pb-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Poster */}
            <div className="md:w-1/3 lg:w-1/4 flex-shrink-0">
              <div className="aspect-[2/3] rounded-md overflow-hidden shadow-xl border border-horror-light">
                <img 
                  src={movie.poster} 
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {movie.trailerUrl && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="horror-button w-full mt-4 flex items-center justify-center gap-2">
                      <PlayCircle size={20} />
                      Watch Trailer
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl bg-horror-dark border-horror-light">
                    <div className="aspect-video w-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src={formatTrailerUrl(movie.trailerUrl)}
                        title={`${movie.title} Trailer`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>
            
            {/* Details */}
            <div className="md:w-2/3 lg:w-3/4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{movie.title}</h1>
              
              <div className="flex flex-wrap gap-4 mt-4 mb-6">
                <div className="flex items-center gap-1.5">
                  <Star className="h-5 w-5 text-horror-blood" fill="#ea384c" />
                  <span className="font-semibold">{movie.rating.toFixed(1)}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>{movie.duration} min</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span>{movie.year}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <span>{movie.director}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genre.map((genre, index) => (
                  <span 
                    key={index} 
                    className="bg-horror-accent px-3 py-1 rounded-md text-sm"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
                  <p className="text-gray-300 leading-relaxed">{movie.synopsis}</p>
                </div>
                
                <Separator className="bg-horror-light" />
                
                <div>
                  <h2 className="text-xl font-semibold mb-2">Cast</h2>
                  <div className="flex flex-wrap gap-2">
                    {movie.cast.map((actor, index) => (
                      <span 
                        key={index} 
                        className="bg-horror px-3 py-1.5 rounded-md text-sm border border-horror-light"
                      >
                        {actor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MovieDetailPage;
