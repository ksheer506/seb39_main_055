import styled, { css } from "styled-components";

import { mobile } from "../../../assets";
import Header from "./Header";
import MainPlaceCard from "./MainPlaceCard";
import { scrollDummyImg } from "./RecommendData";

const Container = styled.div`
  height: max-content;
  padding: 0px 10px;
  position: relative;
  cursor: pointer;

  ${mobile(css`
    width: 100%;
    height: auto;
    overflow-x: hidden;
    margin-left: 6px;
  `)}
`;

const SUList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 10px;
`;

const Recommend = () => {
  return (
    <Container>
      <Header />
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
    </Container>
  );
};

export default Recommend;
