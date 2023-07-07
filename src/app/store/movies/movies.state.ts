import { MovieDetail, SearchMovies } from './movie';

export interface MoviesState {
  selectedMovie: MovieDetail | undefined;
  movieItems: SearchMovies[];
  isLoading: boolean;
  error: string | undefined;
  page: number;
  pageSize: number;
  rows: number;
}

export const initialState: MoviesState = {
  selectedMovie: undefined,
  movieItems: [],
  isLoading: false,
  error: '',
  page: 0,
  pageSize: 5,
  rows: 0,
};