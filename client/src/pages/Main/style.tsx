import styled, { css } from "styled-components";

import { tablet } from "../../assets";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 135px;

  & > section {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    width: 100%;
  }
`;

export const ABox = styled.div`
  width: 100%;
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
