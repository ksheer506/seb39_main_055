import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { breakPoints, colors, fontSizes, mobile } from "../../assets";
import { cat2, cat3, dog1, dog2 } from "../../assets/images/animal";

export const SLink = styled(Link)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 20px 30px;
  width: 100%;
  height: max-content;
  padding: 30px;
  background-color: #fff9e6;

  ${mobile(css`
    padding: 20px;
  `)}
`;

export const STitle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  text-align: center;

  & > h2 {
    font-weight: normal;
    font-size: ${fontSizes("mainH3")};
    color: ${colors("black500")};
    margin-bottom: 15px;
  }

  & > p {
    line-height: 20px;
    color: ${colors("black250")};
  }
`;

export const SImgContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  min-width: 260px;
  gap: 20px;
`;

const SImage = styled.img`
  min-width: 100px;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;

  &:last-child {
    display: none;
  }

  ${breakPoints(
    1108,
    css`
      &:last-child {
        display: block;
      }
    `
  )}

  ${breakPoints(
    600,
    css`
      &:last-child {
        display: none;
      }
    `
  )}

  ${breakPoints(
    450,
    css`
      &:nth-last-child(-n + 2) {
        display: none;
      }
    `
  )}
`;

const imageList = [cat3, dog1, cat2, dog2];

const PostsBanner = () => {
  return (
    <SLink to="/post/list">
      <SImgContainer>
        {imageList.map((image) => (
          <SImage key={image} src={image} alt="animal" />
        ))}
      </SImgContainer>
      <STitle>
        <h2>댕댕이숲</h2>
        <p>
          댕냥이 자랑, 고민거리, 산책친구 등<br />
          다양한 이야기를 댕댕이숲에 외쳐보세요!
        </p>
      </STitle>
    </SLink>
  );
};

export default PostsBanner;
