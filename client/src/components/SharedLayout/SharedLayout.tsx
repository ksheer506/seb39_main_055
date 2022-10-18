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
  width: 100%;
  left: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: scroll;

  ${mobile(css`
    height: calc(100vh - 70px);
    height: -webkit-fill-available;
    height: fill-available;
  `)}
`;

const SSection = styled.section<{ isOverWidth: boolean }>`
  height: max-content;
  padding-bottom: 135px; // === (nav 바 높이)
  /* min-height: calc(100vh - 300px); */
  /* max-width: ${({ isOverWidth }) => (isOverWidth ? "1600px" : "1200px")}; */
`;

const overWidthPaths = ["/search", "/place/list"];

const SharedLayout = () => {
  const { pathname } = useLocation();
  const [isOverWidth, setIsOverWidth] = useState(false);

  useEffect(() => {
    if (overWidthPaths.includes(pathname)) {
      setIsOverWidth(true);
      return;
    }
    setIsOverWidth(false);
  }, [pathname]);

  return (
    <SMain>
      <TopNavbar />
      <SContentBox>
        <SSection isOverWidth={isOverWidth}>
          <Outlet />
        </SSection>
        <Footer />
      </SContentBox>

      <MobileNavbar />
    </SMain>
  );
};

export default SharedLayout;
