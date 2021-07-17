export interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export interface HeaderProps {
  title: string,
}

export interface SidebarProps {
  genres: GenreResponseProps[],
  selectedGenreId: number,
  onGenreClick: Function
}

export interface ContentProps {
  movies: MovieProps[],
}