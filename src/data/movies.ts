
export interface Movie {
  id: number;
  title: string;
  year: number;
  director: string;
  poster: string;
  rating: number;
  genre: string[];
  synopsis: string;
  duration: number; // in minutes
  cast: string[];
  trailerUrl?: string;
  featured?: boolean;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "The Shining",
    year: 1980,
    director: "Stanley Kubrick",
    poster: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    rating: 8.4,
    genre: ["Horror", "Psychological"],
    synopsis: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    duration: 146,
    cast: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"],
    trailerUrl: "https://www.youtube.com/watch?v=5Cb3ik6zP2I",
    featured: true
  },
  {
    id: 2,
    title: "Hereditary",
    year: 2018,
    director: "Ari Aster",
    poster: "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg",
    rating: 7.3,
    genre: ["Horror", "Mystery", "Thriller"],
    synopsis: "A grieving family is haunted by tragic and disturbing occurrences after the death of their secretive grandmother.",
    duration: 127,
    cast: ["Toni Collette", "Alex Wolff", "Milly Shapiro", "Gabriel Byrne"],
    trailerUrl: "https://www.youtube.com/watch?v=V6wWKNij_1M",
    featured: true
  },
  {
    id: 3,
    title: "The Exorcist",
    year: 1973,
    director: "William Friedkin",
    poster: "https://m.media-amazon.com/images/M/MV5BYjhmMGMxZDYtMTkyNy00YWVmLTgyYmUtYTU3ZjcwNTBjN2I1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 8.1,
    genre: ["Horror", "Supernatural"],
    synopsis: "When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.",
    duration: 122,
    cast: ["Ellen Burstyn", "Max von Sydow", "Linda Blair"],
    trailerUrl: "https://www.youtube.com/watch?v=YDGw1MTEe9k"
  },
  {
    id: 4,
    title: "Get Out",
    year: 2017,
    director: "Jordan Peele",
    poster: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzY3OTE@._V1_.jpg",
    rating: 7.7,
    genre: ["Horror", "Mystery", "Thriller"],
    synopsis: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    duration: 104,
    cast: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"],
    trailerUrl: "https://www.youtube.com/watch?v=DzfpyUB60YY"
  },
  {
    id: 5,
    title: "The Witch",
    year: 2015,
    director: "Robert Eggers",
    poster: "https://m.media-amazon.com/images/M/MV5BMTUyNzkwMzAxOF5BMl5BanBnXkFtZTgwMzc1OTk1NjE@._V1_.jpg",
    rating: 6.9,
    genre: ["Horror", "Mystery", "Drama"],
    synopsis: "A family in 1630s New England is torn apart by the forces of witchcraft, black magic, and possession.",
    duration: 92,
    cast: ["Anya Taylor-Joy", "Ralph Ineson", "Kate Dickie"],
    trailerUrl: "https://www.youtube.com/watch?v=iQXmlf3Sefg",
    featured: true
  },
  {
    id: 6,
    title: "The Silence of the Lambs",
    year: 1991,
    director: "Jonathan Demme",
    poster: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    rating: 8.6,
    genre: ["Crime", "Drama", "Thriller"],
    synopsis: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    duration: 118,
    cast: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"],
    trailerUrl: "https://www.youtube.com/watch?v=W6Mm8Sbe__o"
  },
  {
    id: 7,
    title: "A Nightmare on Elm Street",
    year: 1984,
    director: "Wes Craven",
    poster: "https://m.media-amazon.com/images/M/MV5BNzFjZmM1ODgtMDBkMS00NWFlLTg2YmUtZjc3ZTgxMjE1OTI2L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    rating: 7.5,
    genre: ["Horror", "Slasher"],
    synopsis: "The monstrous spirit of a slain child murderer seeks revenge by invading the dreams of teenagers whose parents were responsible for his untimely death.",
    duration: 91,
    cast: ["Heather Langenkamp", "Johnny Depp", "Robert Englund"],
    trailerUrl: "https://www.youtube.com/watch?v=dCVh4lBfW-c"
  },
  {
    id: 8,
    title: "The Thing",
    year: 1982,
    director: "John Carpenter",
    poster: "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    rating: 8.2,
    genre: ["Horror", "Mystery", "Sci-Fi"],
    synopsis: "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
    duration: 109,
    cast: ["Kurt Russell", "Wilford Brimley", "Keith David"],
    trailerUrl: "https://www.youtube.com/watch?v=5ftmr17M-a4"
  },
  {
    id: 9,
    title: "Psycho",
    year: 1960,
    director: "Alfred Hitchcock",
    poster: "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 8.5,
    genre: ["Horror", "Mystery", "Thriller"],
    synopsis: "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
    duration: 109,
    cast: ["Anthony Perkins", "Janet Leigh", "Vera Miles"],
    trailerUrl: "https://www.youtube.com/watch?v=NG3-GlvKPcg"
  },
  {
    id: 10,
    title: "The Conjuring",
    year: 2013,
    director: "James Wan",
    poster: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg",
    rating: 7.5,
    genre: ["Horror", "Supernatural", "Thriller"],
    synopsis: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    duration: 112,
    cast: ["Patrick Wilson", "Vera Farmiga", "Ron Livingston"],
    trailerUrl: "https://www.youtube.com/watch?v=k10ETZ41q5o"
  },
  {
    id: 11,
    title: "It Follows",
    year: 2014,
    director: "David Robert Mitchell",
    poster: "https://m.media-amazon.com/images/M/MV5BMmU0MjBlYzYtZWY0MC00MjliLWI3ZmUtMzhlZDVjMWVmYWY4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    rating: 6.8,
    genre: ["Horror", "Mystery", "Thriller"],
    synopsis: "A young woman is followed by an unknown supernatural force after a sexual encounter.",
    duration: 100,
    cast: ["Maika Monroe", "Keir Gilchrist", "Olivia Luccardi"],
    trailerUrl: "https://www.youtube.com/watch?v=HkZYbOH0ujw"
  },
  {
    id: 12,
    title: "Rosemary's Baby",
    year: 1968,
    director: "Roman Polanski",
    poster: "https://m.media-amazon.com/images/M/MV5BZmEwZGU2NzctYzlmNi00MGJkLWE3N2MtYjBlN2ZhMGJkZTZiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    rating: 8.0,
    genre: ["Drama", "Horror", "Psychological"],
    synopsis: "A young couple moves into an apartment only to be surrounded by peculiar neighbors and occurrences. When the wife becomes mysteriously pregnant, paranoia over the safety of her unborn child begins to control her life.",
    duration: 137,
    cast: ["Mia Farrow", "John Cassavetes", "Ruth Gordon"],
    trailerUrl: "https://www.youtube.com/watch?v=PewtQsgN5WQ"
  }
];

export const getFilteredMovies = (genre?: string, searchTerm?: string) => {
  let filteredMovies = [...movies];
  
  if (genre && genre !== 'All') {
    filteredMovies = filteredMovies.filter(movie => 
      movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    );
  }
  
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filteredMovies = filteredMovies.filter(movie => 
      movie.title.toLowerCase().includes(term) ||
      movie.director.toLowerCase().includes(term) ||
      movie.cast.some(actor => actor.toLowerCase().includes(term))
    );
  }
  
  return filteredMovies;
};

export const getFeaturedMovies = () => {
  return movies.filter(movie => movie.featured);
};

export const getMovieById = (id: number) => {
  return movies.find(movie => movie.id === id);
};

export const getAllGenres = () => {
  const genreSet = new Set<string>();
  
  movies.forEach(movie => {
    movie.genre.forEach(genre => {
      genreSet.add(genre);
    });
  });
  
  return ['All', ...Array.from(genreSet)];
};
