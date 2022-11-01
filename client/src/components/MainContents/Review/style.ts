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
  margin: 0px 0px 15px 0px;
`;

export const SH1 = styled.h1`
  font-weight: normal;
  ${fontSizes("mainH1")}

  ${tablet(css`
    ${fontSizes("mainH2")}
  `)}
  ${mobile(css`
    ${fontSizes("mainH3")}
  `)}
`;

export const SH2 = styled.h2`
  font-size: 30px;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.black250};
  ${fontSizes("mainH4")}

  ${mobile(css`
    ${fontSizes("mainH5")}
  `)}
`;

export const SCardSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SCardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(430px, 0.65fr));
  gap: 20px;
  justify-content: center;
  align-items: center;

  ${mobile(css`
    grid-template-columns: repeat(auto-fill, minmax(320px, 0.8fr));
    gap: 20px;
  `)}
`;
