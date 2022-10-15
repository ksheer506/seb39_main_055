import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { fontSizes, mobile, tablet } from "../../../assets";

export const SArticle = styled.article`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const SLink = styled(Link)`
  display: block;
  height: 330px;
  overflow: hidden;

  ${tablet(
    css`
      height: 300px;
    `
  )}

  ${mobile(
    css`
      height: 270px;
    `
  )}
`;

export const SImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  padding: 20px 0px;
  height: calc(100% - 330px);
  background-color: white;
  padding-left: 60px;
  font-size: 35px;
  overflow: hidden;

  ${fontSizes("mainH1")}

  ${tablet(
    css`
      padding-left: 18px;
      height: calc(100% - 300px);
      ${fontSizes("mainH2")}
    `
  )}

  ${mobile(
    css`
      padding-left: 10px;
      font-size: 22px;
      height: calc(100% - 270px);
      ${fontSizes("mainH3")}
    `
  )}
`;

export const SH1 = styled.h1`
  font-size: 1em;
`;

export const SH2 = styled.h2`
  font-size: 0.7em;
  font-weight: lighter;
  line-height: 3.2rem;

  ${tablet(
    css`
      line-height: 3rem;
    `
  )}

  ${mobile(
    css`
      line-height: 2.5rem;
    `
  )}
`;

export const SMoreInfoBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.45em;
  font-weight: lighter;
  color: #555555;
  margin-top: 10px;

  ${mobile(
    css`
      font-size: 0.65em;
      margin-top: 10px;
    `
  )}
`;

export const SP = styled.p`
  display: inline-block;
  width: max-content;
  margin-right: 10px;
`;

export const SArrow = styled.span`
  display: inline-block;
  background-color: #555555;
  width: 50px;
  height: 2px;
  border-radius: 10px;

  &::before {
    content: "";
    display: block;
    transform-origin: 0% 50%;
    transform: translateX(50px) rotate(-150deg);
    width: 15px;
    height: 2px;
    background-color: #555555;
    border-radius: 10px;
  }
`;
