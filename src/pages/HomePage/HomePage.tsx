import { MouseEvent, useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import { nullPoster } from "../../assets";
import { Modal, MovieItem } from "../../components";
import { Container, NotFoundText } from "../../GlobalStyle";
import { useAppDispatch, useAppSelector } from "../../redux";
import { getMovies } from "../../redux/movie/movieActions";
import { colors } from "../../utils";
import {
  HomePageContainer,
  HomePageHeading,
  HomePageSection,
  LoaderContainer,
  MovieListContainer,
} from "./HomePageStyles";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { loading, search, page, list, error } = useAppSelector(
    (state) => state.movie
  );

  const [showModal, setShowModal] = useState(false);
  const [modalSrc, setModalSrc] = useState("");

  useEffect(() => {
    if (list.length === 0) {
      dispatch(getMovies({ s: search, page: 1 }));
    }
  }, [dispatch, list.length, search]);

  window.onscroll = () => {
    if (window.location.pathname === "/") {
      const { scrollTop, offsetHeight } = document.documentElement;

      if (
        window.innerHeight + Math.floor(scrollTop) === offsetHeight ||
        window.innerHeight + Math.floor(scrollTop) === offsetHeight - 1
      ) {
        if (!error) {
          dispatch(getMovies({ s: search, page: page + 1 }));
        }
      }
    }
  };

  const handlePosterClick = (e: MouseEvent<HTMLImageElement>, src: string) => {
    e.stopPropagation();

    setModalSrc(src === "N/A" ? nullPoster : src);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setModalSrc("");
    setShowModal(false);
  };

  return (
    <>
      <HomePageContainer>
        <Container>
          <HomePageSection>
            {/* Heading */}
            <HomePageHeading data-testid="heading">Movie List</HomePageHeading>

            {/* Movie List */}
            {list.length > 0 && (
              <MovieListContainer data-testid="movie-list">
                {list.map((movie) => (
                  <MovieItem
                    key={movie.imdbID}
                    movie={movie}
                    onPosterClick={(e) => handlePosterClick(e, movie.Poster)}
                  />
                ))}
              </MovieListContainer>
            )}

            {loading && (
              <LoaderContainer data-testid="loading-indicator">
                <ScaleLoader color={colors.black} />
              </LoaderContainer>
            )}

            {list.length === 0 && error && (
              <NotFoundText>Movie Not Found</NotFoundText>
            )}
          </HomePageSection>
        </Container>
      </HomePageContainer>

      {showModal && <Modal src={modalSrc} onClose={handleCloseModal} />}
    </>
  );
};

export default HomePage;
