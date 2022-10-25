/* eslint-disable react/display-name */
import React, {
  ChangeEvent,
  FocusEventHandler,
  forwardRef,
  KeyboardEvent,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import { breakPoints, colors } from "../../assets";
import search from "../../assets/icons/search.png";

export const SSearchBar = styled.div<Pick<SearchBarProps, "breakPoint">>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  height: 55px;
  border: 2px solid ${colors("black050")};
  border-radius: 100px;
  transition: all 0.4s;

  & > img {
    position: absolute;
    right: 30px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  ${({ breakPoint }) =>
    breakPoint &&
    breakPoints(
      breakPoint,
      css`
        border: 0;

        & > input {
          display: none;
        }

        & > img {
          right: 0;
          width: 20px;
          height: 20px;
        }
      `
    )}
`;

export const SInput = styled.input`
  display: block;
  outline: 5px solid rgba(0, 0, 0, 0);
  border: 2px solid ${colors("black050")};
  border: 0px;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  padding: 5px 60px 5px 25px;
  font-size: 16px;
  transition: 400ms all;

  &:focus {
    outline: 4px solid ${colors("orange010")};
  }

  &::placeholder {
    font-size: 0.9rem;
    color: ${colors("black100")};
  }
`;

interface SearchBarProps {
  breakPoint?: number;
  onBlur?: FocusEventHandler;
  className?: string;
}
/**
 * @param breakPoint viewport가 해당 값보다 작을 때, 검색 바 대신 검색 아이콘으로 보여줌
 */
const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ breakPoint, onBlur, className }, ref) => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const defaultResultpath = `/search?search=${inputValue}&category=all`;

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };

    const handleInputKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && inputValue) {
        navigate(defaultResultpath);
        setInputValue("");
      }
    };

    const handleSearchIconClick = () => {
      if (inputValue) {
        navigate(defaultResultpath);
      }
    };

    return (
      <SSearchBar breakPoint={breakPoint} className={className}>
        <SInput
          ref={ref}
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
          onBlur={onBlur}
          placeholder="반려 동물과 함께하고 싶은 장소를 검색하세요."
        />
        <img src={search} alt="search" onClick={handleSearchIconClick} />
      </SSearchBar>
    );
  }
);

export default SearchBar;
