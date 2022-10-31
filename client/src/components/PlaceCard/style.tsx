import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import styled, { css } from "styled-components";

import { colors } from "../../assets";

export const SList = styled.li`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  row-gap: 15px;
  height: 340px;
  width: 100%;
  transition: all 0.4s;

  &:hover {
    opacity: 0.7;
  }
`;

const heartDefault = css`
  fill: #ff5050;
  position: absolute;
  width: 27px;
  height: 27px;
  padding: 5px;
  background-color: #f1f1f163;
  border-radius: 100%;
  right: 10px;
  top: 192px;
`;

export const EmptyHeartSVG = styled(AiOutlineHeart)`
  ${heartDefault}

  fill: #4b4b4b;
`;

export const FillHeartSVG = styled(AiFillHeart)`
  ${heartDefault}
`;

export const SHeader = styled.header`
  flex: 1 0 60px;
  display: flex;
  flex-flow: column nowrap;
  row-gap: 10px;
`;

export const SBar = styled.span`
  display: block;
  height: 3px;
  width: 25px;
  background-color: ${colors("black500")};
`;

export const SFooter = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 5px;
`;
