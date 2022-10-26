import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

import { mobile } from "../../assets";
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
  const [hideFloatSearch, setHideFloatSearch] = useState(true);

  const onBlur = () => {
    setHideFloatSearch(true);
  };

  return (
    <SMain>
      <TopNavbar>
        <FloatSearchBar hidden={hideFloatSearch} onBlur={onBlur} />
      </TopNavbar>
      <SContentBox>
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
