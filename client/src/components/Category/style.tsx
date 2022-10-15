import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { bottomHoverLine, colors, mobile, tablet } from "../../assets";

export const SCategoryUList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  gap: 25px;
  height: 90%;

  ${mobile(css`
    gap: 15px 10px;
  `)}
`;

export const SIconList = styled.li`
  position: relative;
  top: -6px;
  width: 60px;
  transition: 0.5s color;

  ${tablet(css``)}
`;

export const SImgLink = styled(Link)<{ selected?: boolean }>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  row-gap: 8px;
  width: 100%;
  height: 100%;
  color: ${colors("black250")};
  border-radius: 5px;
  transition: 0.4s all;

  ${bottomHoverLine}

  ${({ selected }) => selected && css``}

  &:hover {
    color: #ffc107;
  }
`;

export const SIconImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const SIconText = styled.span<{ selected?: boolean }>`
  font-size: 15px;

  ${({ selected }) =>
    selected &&
    css`
      color: #ffc107;
      font-weight: bold;
    `}
`;
