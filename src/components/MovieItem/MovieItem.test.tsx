import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MovieItem } from "..";
import { MovieListItem } from "../../redux/movie/movieTypes";

const dummyItem: MovieListItem = {
  Title: "The Avengers",
  Year: "2012",
  imdbID: "tt0848228",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
};

describe("Movie Item Component", () => {
  test("check poster is exist", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MovieItem movie={dummyItem} onPosterClick={() => {}} />
      </BrowserRouter>
    );
    const posterEl = getByTestId("poster");

    expect(posterEl).toBeTruthy();
  });

  test("check movie title is exist", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MovieItem movie={dummyItem} onPosterClick={() => {}} />
      </BrowserRouter>
    );
    const movieTitleEl = getByTestId("movie-title");

    expect(movieTitleEl).toBeTruthy();
  });

  test("check year is exist", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MovieItem movie={dummyItem} onPosterClick={() => {}} />
      </BrowserRouter>
    );
    const yearEl = getByTestId("year");

    expect(yearEl).toBeTruthy();
  });

  test("check type is exist", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MovieItem movie={dummyItem} onPosterClick={() => {}} />
      </BrowserRouter>
    );
    const typeEl = getByTestId("type");

    expect(typeEl).toBeTruthy();
  });
});
