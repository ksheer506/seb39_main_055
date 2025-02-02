import styled, { css } from "styled-components";

import { mobile, tablet } from "../../assets";

export const SCarouselBox = styled.div`
  display: flex;
  width: 100%;
  height: 480px;
  position: relative;
  flex-flow: row nowrap;
  z-index: 1;
  overflow: hidden;

  ${tablet(css`
    height: 440px;
  `)}

  ${mobile(css`
    height: 395px;
  `)}
`;

const arrowDefault = css`
  content: "";
  display: block;
  position: absolute;
  width: 20px;
  height: 3px;
  background-color: white;
  border-radius: 0px 10px 10px 10px;
  box-shadow: -5px -5px 20px white;
  top: 50%;
`;

export const SNext = styled.span`
  position: absolute;
  right: 15px;
  top: calc(330px / 2);
  width: 25px;
  height: 25px;
  transform: translateY(-50%);
  z-index: 3;
  cursor: pointer;

  ${tablet(css`
    top: calc(300px / 2);
  `)}

  ${mobile(css`
    top: calc(270px / 2);
  `)}

  &::before {
    ${arrowDefault}
    left: 20px;
    transform-origin: 0 100%;
    transform: translateY(-100%) rotate(-135deg);
  }

  &::after {
    ${arrowDefault}
    transform-origin: 100% 100%;
    transform: translateY(-100%) rotate(-45deg);
  }
`;

export const SPrev = styled(SNext)`
  left: 15px;
  transform: rotate(180deg) translateY(50%);
`;

interface ItemProps {
  animationTime: number;
}

export const SItemList = styled.li<ItemProps>`
  flex: 0 0 100vw;
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateX(100%);
  will-change: transform;
  z-index: 0;
  transition: ${({ animationTime }) => `${animationTime}ms`} all;

  &.main {
    transform: translateX(0%);
    z-index: 2;
  }

  &.left {
    transform: translateX(-100%);
  }
`;
