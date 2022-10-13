/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
import styled, { css } from "styled-components";

import { tablet } from "../../assets";
import { Header, HotPlace, Recommend, Review } from "../../components";

const Container = styled.div`
  top: 60px;
  width: 100%;
  position: relative;

  & > section {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    width: 100%;
  }
`;

const SContentBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 250px 0px; // Header와의 간격: row-gap과 동일하게
  row-gap: 250px;

  ${tablet(css`
    margin: 150px 0px;
    padding: 0px 30px;
    row-gap: 150px;
  `)}
`;

const Main = () => {
  return (
    <Container>
      <Header />
      <section className="main-contents">
        <SContentBox>
          <Recommend />
          <HotPlace />
          <Review />
        </SContentBox>
      </section>
    </Container>
  );
};

export default Main;
