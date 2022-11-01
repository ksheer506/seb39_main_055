import styled, { css } from "styled-components";

import { colors, fontSizes, mobile, tablet } from "../../../assets";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

function colorizeRanking(colors: string[]) {
  let style = "";

  for (let i = 0; i < colors.length; i += 1) {
    style += `
      li:nth-child(${i + 1}) {
        color: ${colors[i]};
      }
    `;
  }

  return style;
}

export const Container = styled.div`
  & > header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 0px 20px 25px 20px;
    height: min-content;

    & > p {
      color: ${colors("black300")};
      line-height: 23px;
      ${fontSizes("mainH4")}

      ${mobile(css`
        ${fontSizes("mainH5")};
      `)};
    }

    ${mobile(css`
      padding: 0px 10px 15px 10px;
    `)}
  }
`;

export const STitleBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 10px;

  & > h3 {
    flex: 0 0 auto;
    color: ${colors("black500")};
    ${fontSizes("mainH1")};

    ${tablet(css`
      ${fontSizes("mainH2")};
    `)}
    ${mobile(css`
      ${fontSizes("mainH3")};
    `)}
  }
  ${tablet(css`
    & > button {
      flex: 1 1 auto;
      margin-left: auto;
      max-width: 170px;
    }
  `)}
`;

export const SSection = styled.section`
  display: flex;
  justify-content: center;
  height: max-content;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SImgContainer = styled.div`
  flex-basis: 50%;
  height: 500px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 1000px) {
    height: 350px;
  }
`;

export const SButtonContainer = styled.div`
  display: flex;
  align-items: center;

  .active {
    color: ${({ theme }) => theme.colors.black500};
  }

  & > button {
    flex-grow: 1;
    padding: 0;
    border: none;
    color: ${({ theme }) => theme.colors.black200};
    background-color: inherit;
    font-size: 18px;
  }

  & > div {
    width: 1px;
    height: 13px;
    margin: 0 10px 3px 10px;
    background-color: ${({ theme }) => theme.colors.black200};
  }

  & > div:last-child {
    display: none;
  }
`;

export const SListContainer = styled.ul`
  display: flex;
  flex-flow: column wrap;
  gap: 15px;
  flex: 0 1 80%;
  position: relative;
  padding: 0px 10px 0px 0px;
  height: min-content;

  // PlaceCard 내부(RankBox)의 순위별 색상 지정
  ${colorizeRanking(["#ffc70d", "#8d8d8d", "#c0923d", "#535353", "#535353"])}
`;

export const SLoading = styled(LoadingSpinner)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
