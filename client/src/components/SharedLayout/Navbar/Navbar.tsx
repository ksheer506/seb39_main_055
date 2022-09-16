import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import ham from "../../../assets/icons/ham.png";
import like from "../../../assets/icons/like.png";
import search from "../../../assets/icons/search.png";
import profile from "../../../assets/icons/user.png";
import logo from "../../../assets/images/logo/logo.png";
import { SHamberger, SMenu, SNav, STab } from "./style";
import { DefaultTab, UserTab } from "./Tabs";

const Navbar = () => {
  const navigate = useNavigate();
  const [tabIsOpen, setTabIsOpen] = useState(false);
  const tabRef = useRef<HTMLElement>(null);

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

  const handleTabClick = () => {
    setTabIsOpen((prev) => !prev);
  };

  const isLogin = true;

  return (
    <SNav>
      <img src={logo} alt="logo" onClick={() => navigate("/")} />
      <SMenu>
        <img src={search} alt="search" />
        <img src={like} alt="like" />
        <SHamberger onClick={() => handleTabClick()}>
          <img src={ham} alt="hamberger" />
          <img src={profile} alt="profile" />
        </SHamberger>
        <STab isOpen={tabIsOpen} ref={tabRef}>
          {isLogin ? <DefaultTab /> : <UserTab />}
        </STab>
      </SMenu>
    </SNav>
  );
};

export default Navbar;
