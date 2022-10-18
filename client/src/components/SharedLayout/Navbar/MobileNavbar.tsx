import { AiOutlineUser } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsChatText } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { colors, fontSizes, mobile } from "../../../assets";
import Category from "../../Category/Category";

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
    background-color: white;
    box-shadow: 0px 1px 7px 0px #cecece;
  `)}
`;

const MenuUList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 100%;
  gap: 20px;
`;

const MenuList = styled.li`
  width: 80px;
`;

const SLink = styled(Link)`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  row-gap: 8px;
`;

const SearchSVG = styled(BiSearch)`
  width: 100%;
  height: 28px;
  fill: ${colors("black100")};
`;

const PostsSVG = styled(BsChatText)`
  width: 100%;
  height: 28px;
  fill: ${colors("black100")};
`;

const MypageSVG = styled(AiOutlineUser)`
  width: 100%;
  height: 28px;
  fill: ${colors("black100")};
`;

const MenuTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  color: ${colors("black400")};

  ${fontSizes("mobileH3")}
`;

const navMenus = [{ icon: "icon", title: "df", onClick: "gjf" }];

const MobileNavbar = () => {
  return (
    <Nav>
      <MenuUList>
        <MenuList>
          <SearchSVG />
          <MenuTitle>검색</MenuTitle>
        </MenuList>
        <MenuList>
          <SLink to="/post/list">
            <PostsSVG />
            <MenuTitle>댕댕이숲</MenuTitle>
          </SLink>
        </MenuList>
        <MenuList>
          <SLink to="/mypage">
            <MypageSVG />
            <MenuTitle>마이페이지</MenuTitle>
          </SLink>
        </MenuList>
      </MenuUList>
    </Nav>
  );
};

export default MobileNavbar;
