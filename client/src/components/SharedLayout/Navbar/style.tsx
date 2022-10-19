import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { bottomHoverLine, breakPoints, colors, mobile } from "../../../assets";
import SearchBar from "../../SearchBar/SearchBar";

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
  box-shadow: 0px 1px 7px 0px #cecece;
  z-index: 4;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 1400px;
  padding: 0 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 20px;
  }
`;

export const LogoLink = styled(Link)`
  & > img {
    width: 130px;
    height: 35px;
    margin-top: -5px;
    cursor: pointer;
  }
`;

export const Search = styled(SearchBar)`
  margin: 0px 55px;
  height: 38px;
  margin-top: 0px;

  & > input {
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
  }

  & > img {
    width: 20px;
    height: 20px;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
  }

  ${breakPoints(
    1000,
    css`
      margin: 0px 25px;
    `
  )}
`;

export const Menu = styled.div`
  flex: 1 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0px;

  & > img {
    display: none;
    width: 40px;
    height: 40px;
    padding: 10px;
    border-radius: 10px;
    transition: 0.4s all;
    cursor: pointer;

    &:hover {
      background-color: ${colors("black010")};
    }
  }

  & > span {
    flex: 0 0 2px;
    display: block;
    height: 22px;
    width: 2px;
    margin: 0px 8px;
    border-radius: 100%;
    background-color: ${colors("black050")};

    ${mobile(css`
      display: none;
    `)}
  }
`;

export const MenuLink = styled(Link)`
  display: flex;
  position: relative;
  align-items: center;
  padding: 10px;
  border: none;
  font-size: 16px;
  transition: 0.4s all;
  margin-top: 3px;
  overflow: hidden;

  ${bottomHoverLine}

  &:hover {
    color: ${colors("orange500")};
  }

  &:nth-child(n + 3) {
    color: ${colors("black200")};

    &:hover {
      color: ${colors("black400")};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    &:nth-child(1) {
      display: none;
    }

    &:nth-child(2) {
      display: none;
    }
  }
`;

export const UserBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 5px 15px;
  margin-left: 10px;
  border-radius: 25px;
  background-color: ${colors("black010")};
  color: #161616;
  font-size: 18px;
  transition: 0.4s all;

  &:hover {
    background-color: ${colors("black010")};
    box-shadow: 0px 0px 5px #a5a5a5;
  }

  & > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export const CategorySection = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  height: 70px;

  ${mobile(css`
    justify-content: start;
    overflow-x: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  `)}
`;

export const Tab = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 50px;
  right: 0;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  width: 150px;
  box-shadow: 0px 0px 5px 0px ${colors("black100")};
  background-color: white;
  animation: dropdown 500ms;
  border-radius: 10px;
  overflow: hidden;
  z-index: 5;

  @keyframes dropdown {
    from {
      opacity: 0;
      transform: translateY(5px);
    }
    to {
      opacity: 1;
    }
  }
`;
