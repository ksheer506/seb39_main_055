import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { colors } from "../../assets";
import search from "../../assets/icons/search.png";

export const SInput = styled.input`
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
    outline: 5px solid #d8d8d86c;
  }
`;

export const SSearchBar = styled.div`
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
`;

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({ className }: SearchBarProps) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const defaultResultpath = `/search?search=${inputValue}&category=all`;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue) {
      navigate(defaultResultpath);
      setInputValue("");
    }
  };

  const handleSearchIconClick = () => {
    if (inputValue) navigate(defaultResultpath);
  };

  return (
    <SSearchBar className={className}>
      <SInput
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
        placeholder="반려 동물과 함께하고 싶은 장소를 검색하세요."
      />
      <img src={search} alt="search" onClick={handleSearchIconClick} />
    </SSearchBar>
  );
};

export default SearchBar;
