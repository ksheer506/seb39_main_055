import { useState } from "react";
import styled from "styled-components";

import img from "../../../assets/images/carousel/1.png";
import PlaceCard from "./PlaceCard/PlaceCard";

export const Container = styled.div`
  box-shadow: 0px 0px 5px grey;
  & > header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
    padding: 50px 10px;
    background-color: #f8f8fa;

    & > h3 {
      color: ${({ theme }) => theme.colors.black500};
      font-size: 42px;
    }

    & > p {
      color: ${({ theme }) => theme.colors.black100};
      font-size: 20px;
    }
  }
`;

export const SSection = styled.section`
  display: flex;
  height: 600px;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    height: 1200px;
  }
`;

export const SImgContainer = styled.div`
  flex-basis: 50%;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

export const SMainContainer = styled.main`
  flex-basis: 50%;
  padding: 20px;
  /* border: 1px solid black; */

  @media screen and (max-width: 1200px) {
    padding: 20px 0 0 0;
  }
`;

export const SButtonContainer = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid black; */

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
`;

export const SListContainer = styled.ul`
  height: 520px;
  margin-top: 20px;
  padding: 5px;
  overflow-y: scroll;

  & > li:last-child {
    margin-bottom: 0;
  }
`;

const DUMMY_DATA = [
  {
    id: 1,
    img,
    location: "경남 고성군",
    name: "고성 에세이더레지던스던펜션",
  },
  {
    id: 2,
    img,
    location: "경남 고성군",
    name: "고성 에세이더레지던스던펜션",
  },
  {
    id: 3,
    img,
    location: "경남 고성군",
    name: "고성 에세이더레지던스던펜션",
  },
  {
    id: 4,
    img,
    location: "경남 고성군",
    name: "고성 에세이더레지던스던펜션",
  },
  {
    id: 5,
    img,
    location: "경남 고성군",
    name: "고성 에세이더레지던스던펜션",
  },
  {
    id: 6,
    img,
    location: "경남 고성군",
    name: "고성 에세이더레지던스던펜션",
  },
  {
    id: 7,
    img,
    location: "경남 고성군",
    name: "고성 에세이더레지던스던펜션",
  },
  {
    id: 8,
    img,
    location: "경남 고성군",
    name: "고성 에세이더레지던스던펜션",
  },
  {
    id: 9,
    img,
    location: "경남 고성군",
    name: "고성 에세이더레지던스던펜션",
  },
  {
    id: 10,
    img,
    location: "경남 고성군",
    name: "고성 에세이더레지던스던펜션",
  },
];

const HotPlace = () => {
  const [data, setData] = useState(DUMMY_DATA);
  return (
    <Container>
      <header>
        <h3>요즘 많이 찾는 핫플</h3>
        <p>나의 반려동물과 함께 잊지못할 추억을 쌓아보세요.</p>
      </header>
      <SSection>
        <SImgContainer>
          <img src={img} alt="hotel" />
        </SImgContainer>
        <SMainContainer>
          <SButtonContainer>
            <button type="button">숙소</button>
            <div />
            <button type="button">미용</button>
            <div />
            <button type="button">카페</button>
            <div />
            <button type="button">맛집</button>
            <div />
            <button type="button">운동장</button>
            <div />
            <button type="button">동물병원</button>
          </SButtonContainer>
          <SListContainer>
            {data.map((el) => (
              <PlaceCard
                key={el.id}
                img={el.img}
                location={el.location}
                name={el.name}
              />
            ))}
          </SListContainer>
        </SMainContainer>
      </SSection>
    </Container>
  );
};

export default HotPlace;
