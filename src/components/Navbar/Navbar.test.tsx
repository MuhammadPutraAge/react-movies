import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "..";
import { store } from "../../redux";

describe("Navbar Component", () => {
  test("subtitle renders correct subtitle text", () => {
    const navbar = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    const subtitleEl = navbar.getByTestId("subtitle");

    expect(subtitleEl.textContent).toBe("React");
  });

  test("title renders correct title text", () => {
    const navbar = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    const titleEl = navbar.getByTestId("title");

    expect(titleEl.textContent).toBe("Movies");
  });

  test("check search input is exist", () => {
    const navbar = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    const searchEl = navbar.getByTestId("search");

    expect(searchEl).toBeTruthy();
  });

  test("check login button is exist", () => {
    const navbar = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    const loginBtnEl = navbar.getByTestId("login-btn");

    expect(loginBtnEl).toBeTruthy();
  });

  test("check register button is exist", () => {
    const navbar = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    const registerBtnEl = navbar.getByTestId("register-btn");

    expect(registerBtnEl).toBeTruthy();
  });
});
