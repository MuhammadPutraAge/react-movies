import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import { MovieItem } from "../components";
import { Container } from "../GlobalStyle";
import { useAppDispatch, useAppSelector } from "../redux";
import { getMovies } from "../redux/movie/movieActions";
import { colors } from "../utils";
import {
  HomePageContainer,
  HomePageHeading,
  HomePageSection,
  LoaderContainer,
  MovieListContainer,
} from "./HomePageStyles";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { loading, search, list, error } = useAppSelector(
    (state) => state.movie
  );

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getMovies({ s: search, page: 1 }));
  }, [dispatch, search]);

  window.onscroll = () => {
    if (
      window.innerHeight + Math.floor(document.documentElement.scrollTop) ===
        document.documentElement.offsetHeight ||
      window.innerHeight + Math.floor(document.documentElement.scrollTop) ===
        document.documentElement.offsetHeight - 1
    ) {
      if (!error) {
        dispatch(getMovies({ s: search, page: page + 1 }));
        setPage(page + 1);
      }
    }
  };

  return (
    <HomePageContainer>
      <Container>
        <HomePageSection>
          {/* Heading */}
          <HomePageHeading>Movie List</HomePageHeading>
          {/* Movie List */}
          <MovieListContainer>
            {list.map((movie) => (
              <MovieItem key={movie.imdbID} movie={movie} />
            ))}
          </MovieListContainer>
          {loading && (
            <LoaderContainer>
              <ScaleLoader color={colors.black} />
            </LoaderContainer>
          )}
        </HomePageSection>
      </Container>
    </HomePageContainer>
  );
};

export default HomePage;
