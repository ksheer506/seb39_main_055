/* eslint-disable consistent-return */
/* eslint-disable react/display-name */
import axios from "axios";
import { memo, ReactNode } from "react";
import { useQuery } from "react-query";

import { queryClient } from "../../utils";
import CardImage from "./CardImage";
import {
  EmptyHeartSVG,
  FillHeartSVG,
  SBar,
  SFooter,
  SHeader,
  SList,
} from "./style";

export interface PlaceCardProps {
  header: ReactNode;
  footer: ReactNode;
  image: string;
  alt: string;
  storeId: string;
  isLiked: boolean;
}

async function invalidateImageCache(image: string, storeId: string) {
  const { data } = await axios.get<Blob>(image, {
    responseType: "blob",
    headers: {
      "Cache-Control": "no-cache",
    },
  });

  queryClient.invalidateQueries(["place", "mainPicture", storeId]);
  return data;
}

const PlaceCard = memo(
  ({ header, footer, image, alt, storeId, isLiked }: PlaceCardProps) => {
    const storeLink = `/place/${storeId}`;
    const { data: src } = useQuery(
      ["place", "mainPicture", storeId],
      async () => {
        let imageBlob: Blob;

        try {
          const { data } = await axios.get<Blob>(image, {
            responseType: "blob",
          });

          imageBlob = data;
        } catch (err) {
          // AWS CORS 에러 발생 시, 이미지 캐시 무효화
          const data = await invalidateImageCache(image, storeId);

          imageBlob = data;
        }

        return URL.createObjectURL(imageBlob);
      },
      {
        suspense: true,
        retry: 1,
        staleTime: 1 * 60 * 60 * 1000,
      }
    );

    return (
      <SList>
        <CardImage link={storeLink} src={src} alt={alt} />
        {isLiked ? <FillHeartSVG /> : <EmptyHeartSVG />}

        <SHeader>
          {header}
          <SBar />
        </SHeader>

        <SFooter>{footer}</SFooter>
      </SList>
    );
  }
);

export default PlaceCard;
