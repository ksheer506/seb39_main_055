import {
  memo,
  ReactChild,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import profile from "../../../assets/icons/user.png";
import logo from "../../../assets/images/logo/logo.png";
import { menuList } from "../../../constants";
import { selectUser, selectUserInfos, useAppSelector } from "../../../redux";
import Category from "../../Category/Category";
import Hamburger from "../../Hamburger/Hamburger";
import * as S from "./style";
import { UserTab } from "./Tabs";

const WhenLoggedIn = memo(function WhenLoggedIn() {
  const tabRef = useRef<HTMLDivElement>(null);
  const [tabIsOpen, setTabIsOpen] = useState(false);
  const { image } = useAppSelector(selectUserInfos) || {};

  const handleTabClick = () => {
    setTabIsOpen((prev) => !prev);
  };

  const handleClickOutside = useCallback(
    ({ target }) => {
      if (tabIsOpen && !tabRef.current?.contains(target)) setTabIsOpen(false);
    },
    [tabIsOpen]
  );

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <S.UserBox>
      <img src={image || profile} alt="profile" />
      <Hamburger
        onClick={handleTabClick}
        isOpen={tabIsOpen}
        menu={
          <S.Tab isOpen={tabIsOpen} onClick={handleTabClick} ref={tabRef}>
            <UserTab />
          </S.Tab>
        }
      />
    </S.UserBox>
  );
});

const WhenNotLoggedIn = memo(function WhenNotLoggedIn() {
  return (
    <>
      <span />
      <S.MenuLink to="/login">로그인</S.MenuLink>
      <S.MenuLink to="/signup">회원가입</S.MenuLink>
    </>
  );
});

interface TopNavbarProps {
  children: ReactChild;
}

const COLLAPSE_BREAKPOINT = 890;

const TopNavbar = ({ children }: TopNavbarProps) => {
  const { loginStatus } = useAppSelector(selectUser);

  return (
    <S.Nav>
      <S.Section>
        <S.LogoLink to="/">
          <img src={logo} alt="logo" />
        </S.LogoLink>
        <S.Search breakPoint={COLLAPSE_BREAKPOINT} />
        <S.Menu>
          <S.MenuLink to="/place/list?category=room">펫플레이스</S.MenuLink>
          <S.MenuLink to="/post/list">댕댕이숲</S.MenuLink>
          {loginStatus ? <WhenLoggedIn /> : <WhenNotLoggedIn />}
        </S.Menu>
      </S.Section>
      {children}
      <S.CategorySection>
        <Category menuList={menuList} />
      </S.CategorySection>
    </S.Nav>
  );
};

export default TopNavbar;
