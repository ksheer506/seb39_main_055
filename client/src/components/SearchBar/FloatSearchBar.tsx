import { FocusEventHandler, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

import SearchBar from "./SearchBar";

const SearchBox = styled.div<{ hidden: boolean }>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: white;
  overflow: hidden;
  transition: 600ms all;

  ${({ hidden }) =>
    hidden &&
    css`
      height: 0;
    `}
`;

const DefaultSearchBar = css`
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
`;

const FloatSearch = styled(SearchBar)`
  ${DefaultSearchBar}
`;

interface FloatSearchBarProps {
  hidden: boolean;
  onBlur?: FocusEventHandler;
}

const FloatSearchBar = ({ hidden, onBlur }: FloatSearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current || hidden) return;

    inputRef.current.focus();
  });

  return (
    <SearchBox hidden={hidden}>
      <FloatSearch ref={inputRef} onBlur={onBlur} />
    </SearchBox>
  );
};

export default FloatSearchBar;
