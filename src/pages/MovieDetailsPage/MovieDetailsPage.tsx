import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { NotFoundPage } from "..";
import { IcArrowLeft } from "../../assets";
import { Loading } from "../../components";
import { Container } from "../../GlobalStyle";
import { useAppDispatch, useAppSelector } from "../../redux";
import { getMovieByID } from "../../redux/movie/movieActions";
import { colors } from "../../utils";
import {
  MovieCastContainer,
  MovieCastList,
  MovieCastName,
  MovieDetailsBackContainer,
  MovieDetailsBackIcon,
  MovieDetailsBackIconContainer,
  MovieDetailsBackTitle,
  MovieDetailsContainer,
  MovieDetailsPageContainer,
  MovieMetadata,
  MoviePoster,
  MoviePosterContainer,
  MovieRating,
  MovieRatingBox,
  MovieRatingContainer,
  MovieSectionTitle,
  MovieSynopsis,
  MovieSynopsisContainer,
  MovieTitle,
  MovieVotes,
} from "./MovieDetailsPageStyles";

const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { loading, data, error } = useAppSelector((state) => state.movie);

  useEffect(() => {
    if (!data || (data && data.imdbID !== id)) {
      if (id) {
        dispatch(getMovieByID({ i: id }));
      }
    }
  }, [data, dispatch, id]);

  if (!loading && error) {
    return <NotFoundPage />;
  }

  if (loading || !data) {
    return <Loading data-testid="loading" />;
  }

  return (
    <Container>
      {/* Back Button */}
      <MovieDetailsBackContainer data-testid="back-btn">
        <MovieDetailsBackIconContainer onClick={() => navigate("/")}>
          <MovieDetailsBackIcon src={IcArrowLeft} alt="Back to Previous Page" />
        </MovieDetailsBackIconContainer>
        <MovieDetailsBackTitle>Back to Previous Page</MovieDetailsBackTitle>
      </MovieDetailsBackContainer>

      <MovieDetailsPageContainer>
        <MoviePosterContainer>
          <MoviePoster src={data.Poster} alt={data.Title} />
        </MoviePosterContainer>

        <MovieDetailsContainer>
          <MovieTitle>{data.Title}</MovieTitle>

          <MovieMetadata>
            {data.Rated} / {data.Country} / {data.Language} / {data.Year} /{" "}
            {data.Runtime}
          </MovieMetadata>

          <MovieRatingBox>
            <MovieRatingContainer>
              <StarRatings
                rating={(parseFloat(data.imdbRating) / 10) * 5}
                numberOfStars={5}
                starEmptyColor={colors.grey}
                starRatedColor={colors.purple}
                starDimension="20px"
                starSpacing="2px"
              />
              <MovieRating>{data.imdbRating}</MovieRating>
            </MovieRatingContainer>
            <MovieVotes>{data.imdbVotes} Votes</MovieVotes>
          </MovieRatingBox>

          <MovieCastContainer>
            <MovieSectionTitle>THE CAST</MovieSectionTitle>
            <MovieCastList>
              <MovieCastName>{data.Actors}</MovieCastName>
            </MovieCastList>
          </MovieCastContainer>

          <MovieSynopsisContainer>
            <MovieSectionTitle>SYNOPSIS</MovieSectionTitle>
            <MovieSynopsis>{data.Plot}</MovieSynopsis>
          </MovieSynopsisContainer>
        </MovieDetailsContainer>
      </MovieDetailsPageContainer>
    </Container>
  );
};

export default MovieDetailsPage;
