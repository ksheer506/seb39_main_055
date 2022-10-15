import { SIconImg, SIconList, SIconText, SImgLink } from "./style";

interface MenuIconProps {
  img: string;
  alt: string;
  menuText: string;
  link: string;
  selected?: boolean;
}

const MenuIcon = ({ img, alt, menuText, link, selected }: MenuIconProps) => {
  return (
    <SIconList>
      <SImgLink to={link} selected={selected}>
        <SIconImg src={img} alt={alt} />
        <SIconText selected={selected}>{menuText}</SIconText>
      </SImgLink>
    </SIconList>
  );
};

export default MenuIcon;
