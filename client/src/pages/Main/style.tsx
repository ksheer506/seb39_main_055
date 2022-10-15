import styled, { css } from "styled-components";

import { tablet } from "../../assets";

export const Container = styled.div`
  top: 135px;
  width: 100%;
  position: relative;

  & > section {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    width: 100%;
  }
`;

export const ABox = styled.div`
  max-width: 1200px;
`;

export const BBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100%;
  row-gap: 150px;

  ${tablet(css`
    row-gap: 100px;
  `)}
`;
