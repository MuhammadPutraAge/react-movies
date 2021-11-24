import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { HomePage } from "..";
import { store } from "../../redux";

describe("Home Page Component", () => {
  test("heading should show correct text", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    expect(getByTestId("heading").textContent).toBe("Movie List");
  });

  test("should show loading indicator and show no movie list initially", () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    expect(queryByTestId("loading-indicator")).toBeInTheDocument();
    expect(queryByTestId("movie-list")).toBeNull();
  });
});
