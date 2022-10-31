/* eslint-disable react/display-name */
import { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Rectangle } from "../Skeleton/Skeleton";

export const SaLink = styled(Link)`
  flex: 1 1 240px;
  width: 100%;
  overflow: hidden;
`;

export const SImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

interface CardImageProps {
  link: string;
  alt: string;
  src?: string;
}

const CardImage = memo(({ link, src, alt }: CardImageProps) => {
  return (
    <SaLink to={link}>
      {src ? (
        <SImg src={src} alt={alt} crossOrigin="anonymous" />
      ) : (
        <Rectangle width="100%" height="235px" />
      )}
    </SaLink>
  );
});

export default CardImage;
