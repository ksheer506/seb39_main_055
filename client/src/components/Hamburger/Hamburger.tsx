import { ReactNode } from "react";

import { HamburgerBox, Patty, PattyButton } from "./style";

interface HamburgerProps {
  onClick: () => void;
  isOpen: boolean;
  menu: ReactNode;
}

const Hamburger = ({ onClick, isOpen, menu }: HamburgerProps) => {
  return (
    <>
      <HamburgerBox onClick={onClick}>
        <PattyButton clicked={isOpen}>
          <Patty />
          <Patty />
          <Patty />
        </PattyButton>
      </HamburgerBox>

      {menu}
    </>
  );
};

export default Hamburger;
