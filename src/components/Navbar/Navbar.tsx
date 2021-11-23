import React from "react";
import { IcSearch } from "../../assets";
import { Container } from "../../GlobalStyle";
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
  NavSearchButton,
  NavSearchButtonContainer,
  NavSearchContainer,
  NavSearchInput,
} from "./NavbarStyles";

const Navbar: React.FC = () => {
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
              />
              <NavSearchButtonContainer>
                <NavSearchButton src={IcSearch} alt="Search Movies" />
              </NavSearchButtonContainer>
            </NavSearchContainer>
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
