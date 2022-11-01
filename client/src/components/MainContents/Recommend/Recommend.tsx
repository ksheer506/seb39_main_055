import { ChangeEvent, MouseEvent } from "react";
import styled, { css } from "styled-components";

import { tablet } from "../../../assets";
import Header from "./Header";
import MainPlaceCard from "./MainPlaceCard";
import { scrollDummyImg } from "./RecommendData";

const Container = styled.div`
  height: max-content;
  width: 100%;
  padding: 0px 10px;
  position: relative;
  cursor: pointer;

  ${tablet(css`
    height: auto;
  `)}
`;

const SPictureBox = styled.section`
  overflow-x: scroll;
`;

const SUList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 15px;

  ${tablet(css`
    width: max-content;
    gap: 15px;
    justify-content: start;
    padding-bottom: 20px;
    overflow-x: scroll;
  `)}
`;

const Recommend = () => {
  const handleChange = (e: ChangeEvent<HTMLButtonElement>) => {
    if (!e.target.value) return; // 'EventTarget' 형식에 'target' 속성이 없습니다.
    const { target, currentTarget } = e;

    console.log("change", e.currentTarget.value);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!e.currentTarget.value) return; // 'EventTarget' 형식에 'target' 속성이 없습니다.
    const { target, currentTarget } = e;

    console.log(e.target); //
    // console.log("click", e.target.value);
  };

  return (
    <Container>
      <Header />
      <SPictureBox>
        <SUList>
          {scrollDummyImg.map((recommend, index) => (
            <MainPlaceCard
              stretched={index % 2 !== 0}
              id={recommend.id}
              image={recommend.image}
              category={recommend.category}
              title={recommend.title}
              date={recommend.date}
              alt={recommend.alt}
              textTitle={recommend.textTitle}
              textLine={recommend.textLine}
              link={recommend.link}
              key={recommend.textTitle}
            />
          ))}
        </SUList>
      </SPictureBox>
    </Container>
  );
};

export default Recommend;
