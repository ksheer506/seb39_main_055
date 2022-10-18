import styled, { css } from "styled-components";

import { mobile } from "../../../assets";

const Nav = styled.nav`
  display: none;

  ${mobile(css`
    position: sticky;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    bottom: 0;
    width: 100%;
    height: 70px;
    margin: 0;
    background-color: #fdb6b6;
    box-shadow: 0px 1px 7px 0px #cecece;
  `)}
`;

const MobileNavbar = () => {
  return <Nav>fgdfgfdg</Nav>;
};

export default MobileNavbar;
