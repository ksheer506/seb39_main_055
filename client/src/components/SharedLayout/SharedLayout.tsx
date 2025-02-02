import { useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

import { mobile } from "../../assets";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import FloatSearchBar from "../SearchBar/FloatSearchBar";
import Footer from "./Footer/Footer";
import MobileNavbar from "./Navbar/MobileNavbar";
import TopNavbar from "./Navbar/TopNavbar";

const SMain = styled.main`
  overflow-x: hidden;
`;

const SContentBox = styled.div`
  position: relative;
  overflow-x: hidden;
  scroll-behavior: smooth;

  ${mobile(css`
    height: calc(100vh - 70px);
  `)}
`;

const SABox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  left: 0;
  height: max-content;
  width: 100%;

  ${mobile(css`
    position: absolute;
    top: 0;
  `)}
`;

const SSection = styled.section<{ isOverWidth: boolean }>`
  width: 100%;
  padding-top: 135px;
  max-width: ${({ isOverWidth }) => (isOverWidth ? "1600px" : "1200px")};
`;

const overWidthPaths = ["/search", "/place/list"];

const SharedLayout = () => {
  const { pathname } = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);
  const [hideFloatSearch, setHideFloatSearch] = useState(true);

  const onBlur = () => {
    setHideFloatSearch(true);
  };

  return (
    <SMain>
      <ScrollToTopButton target={contentRef} />
      <TopNavbar>
        <FloatSearchBar hidden={hideFloatSearch} onBlur={onBlur} />
      </TopNavbar>
      <SContentBox ref={contentRef}>
        <SABox>
          <SSection isOverWidth={overWidthPaths.includes(pathname)}>
            <Outlet />
          </SSection>
          <Footer />
        </SABox>
      </SContentBox>

      <MobileNavbar
        toggleSearchBar={() => setHideFloatSearch((prev) => !prev)}
      />
    </SMain>
  );
};

export default SharedLayout;
