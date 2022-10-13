import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import profile from "../../../assets/icons/user.png";
import logo from "../../../assets/images/logo/logo.png";
import { selectUser, selectUserInfos, useAppSelector } from "../../../redux";
import {
  Search,
  SHamberger,
  SLink,
  SMenu,
  SNav,
  SSection,
  STab,
} from "./style";
import { DefaultTab, UserTab } from "./Tabs";

const Navbar = () => {
  const navigate = useNavigate();
  const tabRef = useRef<HTMLElement>(null);
  const [tabIsOpen, setTabIsOpen] = useState(false);
  const { loginStatus } = useAppSelector(selectUser);
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
    <SNav>
      <SSection>
        <img src={logo} alt="logo" onClick={() => navigate("/")} />
        <Search />
        <SMenu>
          <SLink to="/place/list?category=room">펫플레이스</SLink>
          <SLink to="/post/list">댕댕이숲</SLink>
          {!loginStatus ? (
            <>
              <span />
              <SLink to="/login">로그인</SLink>
              <SLink to="/signup">회원가입</SLink>
            </>
          ) : (
            <SHamberger onClick={() => handleTabClick()}>
              <img src={image || profile} alt="profile" />
            </SHamberger>
          )}

          <STab
            isOpen={tabIsOpen}
            ref={tabRef}
            onClick={() => setTabIsOpen(false)}
          >
            {loginStatus ? <UserTab /> : <DefaultTab />}
          </STab>
        </SMenu>
      </SSection>
    </SNav>
  );
};

export default Navbar;
