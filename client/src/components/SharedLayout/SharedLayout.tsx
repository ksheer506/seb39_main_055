import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const SMain = styled.main`
  overflow-x: hidden;
`;

const SSection = styled.section<{ isOverWidth: boolean }>`
  height: max-content;
  padding-bottom: 135px; // === (nav 바 높이)
  min-height: calc(100vh - 300px);

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
      <Navbar />
      <SSection isOverWidth={isOverWidth}>
        <Outlet />
      </SSection>
      <Footer />
    </SMain>
  );
};

export default SharedLayout;
