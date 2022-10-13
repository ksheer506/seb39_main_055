import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const SSection = styled.section<{ isOverWidth: boolean }>`
  height: max-content;
  padding-bottom: 60px; // === (nav 바 높이)
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
    <div>
      <Navbar />
      <SSection isOverWidth={isOverWidth}>
        <Outlet />
      </SSection>
      <Footer />
    </div>
  );
};

export default SharedLayout;
