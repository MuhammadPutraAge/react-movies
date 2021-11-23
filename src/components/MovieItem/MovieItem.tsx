import { nullPoster } from "../../assets";
import { MovieListItem } from "../../redux/movie/movieTypes";
import {
  MovieItemContainer,
  MovieItemContent,
  MovieItemPoster,
  MovieItemTitle,
  MovieItemType,
  MovieItemTypeContainer,
  MovieItemYear,
} from "./MovieItemStyles";

interface Props {
  movie: MovieListItem;
}

const MovieItem: React.FC<Props> = ({ movie }) => {
  return (
    <MovieItemContainer>
      <MovieItemPoster
        data-testid="poster"
        src={movie.Poster === "N/A" ? nullPoster : movie.Poster}
        alt={movie.Title}
      />
      <MovieItemContent>
        <MovieItemTypeContainer>
          <MovieItemType data-testid="type">{movie.Type}</MovieItemType>
        </MovieItemTypeContainer>
        <MovieItemTitle data-testid="movie-title">{movie.Title}</MovieItemTitle>
        <MovieItemYear data-testid="year">{movie.Year}</MovieItemYear>
      </MovieItemContent>
    </MovieItemContainer>
  );
};

export default MovieItem;
