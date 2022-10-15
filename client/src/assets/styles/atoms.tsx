import { css } from "styled-components";

import { colors } from "./Theme";

export const formBorders = css`
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px #cfcfcf;
`;

export const bottomHoverLine = css`
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
`;
