import { MovieCard } from '../MovieCard';

import { ContentProps } from '../../@types/interfaces';

import './content.scss';

export function Content({ movies }: ContentProps) {
  // Complete aqui
  return (
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard key ={movie.imdbID}
          title={movie.Title}
          poster={movie.Poster}
          runtime={movie.Runtime}
          rating={movie.Ratings[0].Value}
        />
      ))}
    </div>
  );
}