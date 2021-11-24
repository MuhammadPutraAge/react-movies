import React, { KeyboardEvent, useState } from "react";
import { useNavigate } from "react-router";
import { IcSearch } from "../../assets";
import { Container } from "../../GlobalStyle";
import { useAppDispatch, useAppSelector } from "../../redux";
import { resetMovie } from "../../redux/movie/movieSlice";
import {
  Nav,
  NavbarContainer,
  NavBrandContainer,
  NavBrandSubtitle,
  NavBrandTitle,
  NavLinkContainer,
  NavLinkLogin,
  NavLinkRegister,
  NavLogoContainer,
  NavMainContainer,
  NavRecommendedContainer,
  NavRecommendedItem,
  NavSearchButton,
  NavSearchButtonContainer,
  NavSearchContainer,
  NavSearchInput,
} from "./NavbarStyles";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { list } = useAppSelector((state) => state.movie);

  const [searchInput, setSearchInput] = useState("");

  const handleSearch = async (search: string) => {
    if (search !== "") {
      await dispatch(resetMovie(search));
      setSearchInput("");
      navigate("/");
    }
  };

  const handleKeyPress = (
    e: KeyboardEvent<HTMLInputElement>,
    search: string
  ) => {
    if (e.key === "Enter") {
      handleSearch(search);
    }
  };

  return (
    <NavbarContainer>
      <Container>
        <Nav>
          <NavLogoContainer to="/">
            <NavBrandContainer>
              <NavBrandSubtitle data-testid="subtitle">React</NavBrandSubtitle>
              <NavBrandTitle data-testid="title">Movies</NavBrandTitle>
            </NavBrandContainer>
          </NavLogoContainer>

          <NavMainContainer>
            <NavSearchContainer data-testid="search">
              <NavSearchInput
                type="search"
                placeholder="Avengers, Spiderman, Batman"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, searchInput)}
              />
              <NavSearchButtonContainer
                onClick={() => handleSearch(searchInput)}
              >
                <NavSearchButton src={IcSearch} alt="Search Movies" />
              </NavSearchButtonContainer>
            </NavSearchContainer>

            {searchInput !== "" && (
              <NavRecommendedContainer>
                {list
                  .filter((item) =>
                    item.Title.toLowerCase().includes(searchInput)
                  )
                  .map((r) => (
                    <NavRecommendedItem
                      key={r.imdbID}
                      onClick={() => {
                        setSearchInput("");
                        navigate(`/${r.imdbID}`);
                      }}
                    >
                      {r.Title}
                    </NavRecommendedItem>
                  ))}
              </NavRecommendedContainer>
            )}
          </NavMainContainer>

          <NavLinkContainer>
            <NavLinkRegister data-testid="register-btn" to="/daftar">
              Login
            </NavLinkRegister>
            <NavLinkLogin data-testid="login-btn" to="/masuk">
              Register
            </NavLinkLogin>
          </NavLinkContainer>
        </Nav>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
