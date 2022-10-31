/* eslint-disable react/display-name */
import { memo } from "react";

import CardImage from "./CardImage";
import { PlaceCardProps } from "./PlaceCard";
import {
  EmptyHeartSVG,
  FillHeartSVG,
  SBar,
  SFooter,
  SHeader,
  SList,
} from "./style";

type PlaceCardErrorProps = Omit<PlaceCardProps, "image" | "alt">;

const PlaceCardError = memo(
  ({ header, footer, storeId, isLiked }: PlaceCardErrorProps) => {
    const storeLink = `/place/${storeId}`;

    return (
      <SList>
        <CardImage link={storeLink} alt="" />
        {isLiked ? <FillHeartSVG /> : <EmptyHeartSVG />}

        <SHeader>
          {header}
          <SBar />
        </SHeader>

        <SFooter>
          {footer}
          {/* <SStarSVG />
          <SRatingP>
            {averageRating} ({reviews})
          </SRatingP> */}
        </SFooter>
      </SList>
    );
  }
);

export default PlaceCardError;
