import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

import { mobile } from "../../assets";
import Footer from "./Footer/Footer";
import MobileNavbar from "./Navbar/MobileNavbar";
import TopNavbar from "./Navbar/TopNavbar";

const SMain = styled.main`
  overflow-x: hidden;
`;

const SContentBox = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  left: 0;
  overflow-x: hidden;
  overflow-y: scroll;

  ${mobile(css`
    height: calc(100vh - 70px);
  `)}
`;

const SSection = styled.section<{ isOverWidth: boolean }>`
  width: 100%;
  height: max-content;
  padding-top: 135px;
  /* min-height: calc(100vh - 300px); */
  max-width: ${({ isOverWidth }) => (isOverWidth ? "1600px" : "1200px")};
`;

const overWidthPaths = ["/search", "/place/list"];

const SharedLayout = () => {
  const { pathname } = useLocation();

  return (
    <SMain>
      <TopNavbar />
      <SContentBox>
        <SSection isOverWidth={overWidthPaths.includes(pathname)}>
          <Outlet />
        </SSection>
        <Footer />
      </SContentBox>

      <MobileNavbar />
    </SMain>
  );
};

export default SharedLayout;
