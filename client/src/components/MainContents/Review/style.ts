import styled, { css } from "styled-components";

import { fontSizes, mobile, tablet } from "../../../assets";

export const SReviewSection = styled.section`
  width: 100%;
`;

export const SHeader = styled.header`
  display: flex;
  flex-flow: column wrap;
  row-gap: 10px;
  align-items: center;
  margin: 20px 0px 30px 0px;
`;

export const SH1 = styled.h1`
  font-weight: normal;

  ${fontSizes("mainH1")}

  ${tablet(css`
    font-size: 30px;
  `)}
`;

export const SH2 = styled.h2`
  font-size: 30px;
  line-height: 2rem;
  ${fontSizes("mainH4")}
  color: ${({ theme }) => theme.colors.black250};

  ${tablet(css`
    font-size: 25px;
  `)}
`;

export const SCardSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SCardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 0.65fr));
  gap: 15px;
  justify-content: center;
  align-items: center;

  ${mobile(css`
    grid-template-columns: repeat(auto-fill, minmax(310px, 0.8fr));
    gap: 20px;
  `)}
`;
