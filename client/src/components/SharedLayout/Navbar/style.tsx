import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { breakPoints, colors } from "../../../assets";
import SearchBar from "../../SearchBar/SearchBar";

export const SNav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 1px 7px 0px #cecece;
  z-index: 3;
`;

export const SSection = styled.section`
  width: 100%;
  max-width: 1400px;
  padding: 0 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  & > img {
    width: 130px;
    height: 35px;
    margin-top: -5px;
    cursor: pointer;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 20px;
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

export const SMenu = styled.div`
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
      background-color: ${({ theme }) => theme.colors.black010};
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
  }
`;

export const SLink = styled(Link)`
  display: flex;
  position: relative;
  align-items: center;
  padding: 10px;
  border: none;
  font-size: 16px;
  transition: 0.4s all;
  margin-top: 3px;
  overflow: hidden;

  &::after {
    display: flex;
    justify-content: center;
    position: absolute;
    content: "";
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 0px;
    height: 3px;
    margin-top: 3px;
    background-color: ${colors("orange075")};
    transition: 0.4s all;
  }

  &:hover::after {
    width: 80%;
  }

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

export const SHamberger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 5px 15px;
  margin-left: 10px;
  border-radius: 25px;
  color: #161616;
  font-size: 18px;
  transition: all 0.4s;
  transition: 0.4s all;

  &:hover {
    ${colors("black010")}
    cursor: pointer;
  }

  & > img:first-child {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export const STab = styled.aside<{ isOpen: boolean }>`
  position: absolute;
  top: 50px;
  right: 0;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  width: 200px;
  padding: 20px 0;
  box-shadow: rgb(0 0 0 / 40%) 0px 0px 4px 0px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.black300};
  background-color: white;
  font-size: 14px;
  animation-name: dropdown;
  animation-duration: 500ms;
  animation-direction: normal;

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
