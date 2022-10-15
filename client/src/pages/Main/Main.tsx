/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
import styled, { css } from "styled-components";

import { tablet } from "../../assets";
import {
  Header,
  HotPlace,
  PostsBanner,
  Recommend,
  Review,
} from "../../components";

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
  row-gap: 150px;

  ${tablet(css`
    row-gap: 100px;
  `)}
`;

const Main = () => {
  return (
    <Container>
      <section className="main-contents">
        <SContentBox>
          <Header />
          <PostsBanner />
          <Recommend />
          <HotPlace />
          <Review />
        </SContentBox>
      </section>
    </Container>
  );
};

export default Main;
