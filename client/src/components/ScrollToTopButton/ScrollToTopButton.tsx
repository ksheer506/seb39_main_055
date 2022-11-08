import { IoIosArrowUp } from "react-icons/io";
import styled, { css } from "styled-components";

import { mobile } from "../../assets";

const SButton = styled.button`
  position: fixed;
  top: 90vh;
  left: calc(100vw - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 0;
  padding: 0 0 2px 0;
  background-color: #fcfcfc;
  box-shadow: 0px 0px 5px #b6b6b6;
  transition: 400ms all;
  z-index: 1000;

  &:hover {
    box-shadow: 0px 0px 12px #b6b6b6;
    transition: 400ms all;
  }

  ${mobile(css`
    top: 85vh;
    left: calc(100vw - 50px);
    width: 30px;
    height: 30px;
  `)}
`;

const SToTop = styled(IoIosArrowUp)`
  fill: black;
  width: 60%;
  height: 60%;
`;

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <SButton onClick={scrollToTop}>
      <SToTop />
    </SButton>
  );
};

export default ScrollToTopButton;
