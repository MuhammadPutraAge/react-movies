import { MouseEvent } from "react";
import { useNavigate } from "react-router";
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
  onPosterClick: (e: MouseEvent<HTMLImageElement>) => void;
}

const MovieItem: React.FC<Props> = ({ movie, onPosterClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${movie.imdbID}`);
  };

  return (
    <>
      <MovieItemContainer onClick={handleClick}>
        <MovieItemPoster
          data-testid="poster"
          src={movie.Poster === "N/A" ? nullPoster : movie.Poster}
          alt={movie.Title}
          onClick={onPosterClick}
        />
        <MovieItemContent>
          <MovieItemTypeContainer>
            <MovieItemType data-testid="type">{movie.Type}</MovieItemType>
          </MovieItemTypeContainer>
          <MovieItemTitle data-testid="movie-title">
            {movie.Title}
          </MovieItemTitle>
          <MovieItemYear data-testid="year">{movie.Year}</MovieItemYear>
        </MovieItemContent>
      </MovieItemContainer>
    </>
  );
};

export default MovieItem;
