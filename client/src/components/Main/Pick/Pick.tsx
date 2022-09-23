import { useState } from "react";
import { CgChevronRight } from "react-icons/cg";
import styled, { css } from "styled-components";

import { mobile, tablet } from "../../../assets";
import pickExample from "../../../assets/images/PickPage/pickExample.png";
import { data, linkAdress1 } from "./PickData";
import SideText from "./SideText";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;

  ${mobile(css`
    flex-direction: column;
    align-items: center;
    height: 610px;
    overflow-x: hidden;
  `)}

  @media (max-width: 1110px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    flex-wrap: wrap;
  }
`;

const TextContainer = styled.div`
  width: 40%;

  ${mobile(css`
    flex-wrap: wrap;
    width: auto;
    height: 10%;
  `)}

  @media (max-width: 1110px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    flex-wrap: wrap;
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: auto;
  width: 50%;
  gap: 15px;

  ${mobile(css`
    flex-direction: column;
    align-items: center;
  `)}

  @media (max-width: 1110px) {
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const SideContents = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  height: 440px;
  width: 20%;

  ${mobile(css`
    flex-direction: row;
    height: 100px;
  `)}

  @media (max-width: 1110px) {
    flex-direction: row;
    height: 100px;
  }

  & > img {
    ${mobile(css`
      widht: 100%;
      height: 100px;
    `)}
  }
`;

const UserPickContents = styled.span`
  width: 440px;
  height: 400px;
  position: relative;
  align-items: center;

  & > img {
    widht: 440px;
    height: 400px;
    object-fit: contain;
    
    ${mobile(css`
      widht: 100%;
      height: 100%;
      margin: 0% 8.7%;
    `)}
    `;

const ContentsInfo = styled.div`
  font-size: 32px;
  line-height: 42px;
  position: absolute;
  top: 75%;
  left: 7%;
  opacity: 0.7;

  // :hover {
  //   opacity: 0.8;
  // }
  & > a {
    color: #ffff;
  }

  ${mobile(css`
    top: 58%;
    left: 15%;
    font-size: 20px;
    line-height: 30px;
  `)}
`;

const SecondTextLine = styled.a`
  color: #ffff;
  display: flex;
  align-items: center;
`;

const Pick = () => {
  // const [defaultImg, setDefaultImg] = useState(images);
  // const [crrImg, setCrrImg] = useState(images[0]);
  // const handleOnClick = (id: number) => {
  //   setCrrImg(images.find((i) => i.id === id));  };
  const [crrImg, setCrrImg] = useState(data[0]);
  const handleOnClick = (e: any) => {
    setCrrImg(e.target.value);
  };
  return (
    <Container>
      <TextContainer>
        <SideText />
      </TextContainer>
      <Contents>
        <SideContents>
          {/* onClick={handleOnClick} crrImg={crrImg} images={images} /> */}
          <img
            onChange={handleOnClick}
            alt="hand"
            src="https://user-images.githubusercontent.com/104320234/189981170-e4ceda7e-b5ff-4de1-8791-be0679027363.png"
          />
          <img
            onClick={handleOnClick}
            alt="ktx"
            src="https://user-images.githubusercontent.com/104320234/190197236-2c14cd20-1867-4562-a249-abe026dcc096.png"
          />
          <img
            onClick={handleOnClick}
            alt="airplane"
            src="https://user-images.githubusercontent.com/104320234/190197670-8d50fc24-c298-449c-9bae-cd69a3c73e46.png"
          />
        </SideContents>
        <UserPickContents>
          {/* {crrImg} */}
          <img alt="" src={pickExample} />
          <ContentsInfo>
            <a href={linkAdress1}>KTX SRT 동반 탑승규정</a>
            <SecondTextLine href={linkAdress1}>
              2022 상반기 ver.
              <CgChevronRight size={40} />
            </SecondTextLine>
          </ContentsInfo>
        </UserPickContents>
      </Contents>
    </Container>
  );
};

export default Pick;
