import styled, { css } from "styled-components";

import { colors } from "../../assets";

export const HamburgerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  width: 30px;
  height: 100%;
  cursor: pointer;
`;

export const PattyButton = styled.button<{ clicked: boolean }>`
  position: relative;
  width: 25px;
  height: 18px;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  border: 0px;
  padding: 0px;
  margin: 0px;
  background-color: rgba(0, 0, 0, 0);

  ${({ clicked }) =>
    clicked &&
    css`
      & > span:nth-child(1) {
        transform: translate(-50%, 0%) rotate(45deg);
      }

      & > span:nth-child(2) {
        opacity: 0;
      }

      & > span:nth-child(3) {
        transform: translate(-50%, 80%) rotate(-45deg);
      }
    `}
`;

export const Patty = styled.span`
  display: block;
  position: relative;
  width: 70%;
  height: 2px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors("black500")};
  transition: 0.4s all;

  &:nth-child(1) {
    transform-origin: 0 0;
  }

  &:nth-child(2) {
    margin-top: 3px;
    margin-bottom: 3px;
  }

  &:nth-child(3) {
    transform-origin: 0 100%;
  }
`;
