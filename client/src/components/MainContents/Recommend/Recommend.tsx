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
    width: min-content;
    gap: 15px;
    justify-content: start;
    padding-bottom: 20px;
    overflow-x: scroll;
  `)}
`;

const Recommend = () => {
  return (
    <Container>
      <Header />
      <SPictureBox>
        <SUList>
          {scrollDummyImg.map((recommend, index) => (
            <MainPlaceCard
              isEven={index % 2 !== 0}
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
