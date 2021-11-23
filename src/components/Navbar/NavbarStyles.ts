import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../utils";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 10rem;
  background-color: ${colors.black};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  @media screen and (max-width: 1200px) {
    padding: 3.2rem 0;
    height: auto;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const NavLogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  @media screen and (max-width: 1200px) {
    align-self: flex-start;
    margin-bottom: 2.4rem;
  }
`;

export const NavBrandContainer = styled.div`
  margin-left: 1.6rem;
  color: ${colors.white};
  @media screen and (max-width: 480px) {
    margin-left: 0.8rem;
  }
`;

export const NavBrandSubtitle = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const NavBrandTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 500;
  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const NavMainContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const NavSearchContainer = styled.div`
  width: 50rem;
  height: 4.2rem;
  padding: 0.4rem;
  display: flex;
  background-color: ${colors.white};
  border-radius: 0.4rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const NavSearchInput = styled.input`
  outline: none;
  border: none;
  height: 100%;
  flex: 1;
  padding: 0 1.2rem;
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const NavSearchButtonContainer = styled.div`
  height: 100%;
  width: 3.4rem;
  border-radius: 0.4rem;
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const NavSearchButton = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const NavLinkContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1200px) {
    position: absolute;
    top: 1rem;
    right: 0;
    height: auto;
  }
  @media screen and (max-width: 600px) {
    top: 0.5rem;
  }
  @media screen and (max-width: 480px) {
    top: 0;
  }
`;

export const NavLinkRegister = styled(Link)`
  height: 4.2rem;
  padding: 0 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.black};
  background-color: ${colors.white};
  font-size: 1.4rem;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-right: 2.4rem;
  text-decoration: none;
  @media screen and (max-width: 600px) {
    color: ${colors.white};
    font-size: 1.4rem;
    font-weight: 500;
    background-color: transparent;
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
    margin-right: 1.6rem;
  }
`;

export const NavLinkLogin = styled(Link)`
  color: ${colors.white};
  font-size: 1.4rem;
  font-weight: 500;
  text-decoration: none;
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
