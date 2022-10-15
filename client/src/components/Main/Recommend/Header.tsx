import styled, { css } from "styled-components";

import { colors, fontSizes, mobile } from "../../../assets";

const SHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px 10px;
  font-family: "ONE Mobile";

  ${mobile(css`
    width: 400px;
    align-items: flex-start;
  `)}

  & > h1 {
    color: ${({ theme }) => theme.colors.black500};
    font-weight: 400;

    ${fontSizes("mainH1")}
  }
`;

const SubTitle = styled.div`
  font-family: "ONE Mobile";
  font-style: normal;
  font-size: 20px;
  line-height: 22px;
  color: ${colors("black250")};

  ${mobile(css`
    align-items: center;
  `)}
`;

const Header = () => {
  return (
    <SHeader>
      <h1>오늘의 추천 플레이스</h1>
      <SubTitle>
        이번 주말에 반려동물과 어디로 갈지 고민이라면? 윗펫에서 추천해드립니다.
      </SubTitle>
    </SHeader>
  );
};

export default Header;
