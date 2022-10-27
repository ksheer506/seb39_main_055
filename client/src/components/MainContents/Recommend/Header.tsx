import styled, { css } from "styled-components";

import { colors, fontSizes, mobile, tablet } from "../../../assets";

const SHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px 10px;
  margin: 0;
  font-family: "ONE Mobile";

  ${mobile(css`
    align-items: flex-start;
    padding: 15px 0px;
  `)}
`;

const MainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.black500};
  font-weight: 400;

  ${fontSizes("mainH1")}

  ${tablet(css`
    ${fontSizes("mainH2")}
  `)}
  ${mobile(css`
    ${fontSizes("mainH3")}
  `)}
`;

const SubTitle = styled.h2`
  font-family: "ONE Mobile";
  font-style: normal;
  font-size: 20px;
  line-height: 23px;
  color: ${colors("black250")};

  ${mobile(css`
    ${fontSizes("mainH5")}
  `)}
`;

const Header = () => {
  return (
    <SHeader>
      <MainTitle>오늘의 추천 플레이스</MainTitle>
      <SubTitle>
        이번 주말에 반려동물과 어디로 갈지 고민이라면? 윗펫에서 추천해드립니다.
      </SubTitle>
    </SHeader>
  );
};

export default Header;
