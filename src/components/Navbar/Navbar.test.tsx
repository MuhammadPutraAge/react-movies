import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "..";

describe("Navbar Component", () => {
  test("subtitle renders correct subtitle text", () => {
    const navbar = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const subtitleEl = navbar.getByTestId("subtitle");

    expect(subtitleEl.textContent).toBe("React");
  });

  test("title renders correct title text", () => {
    const navbar = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const titleEl = navbar.getByTestId("title");

    expect(titleEl.textContent).toBe("Movies");
  });

  test("check search input is exist", () => {
    const navbar = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const searchEl = navbar.getByTestId("search");

    expect(searchEl).toBeTruthy();
  });

  test("check login button is exist", () => {
    const navbar = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const loginBtnEl = navbar.getByTestId("login-btn");

    expect(loginBtnEl).toBeTruthy();
  });

  test("check register button is exist", () => {
    const navbar = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const registerBtnEl = navbar.getByTestId("register-btn");

    expect(registerBtnEl).toBeTruthy();
  });
});
