/* eslint-disable react/display-name */
import { memo, ReactNode } from "react";

import { useGeolocation } from "../../../hooks";
import { INITIAL_LOCATION } from "../../../redux";
import {
  SaBox,
  SaP,
  SbP,
  SHeader,
  SLocSVG,
  SSearchBar,
  SWarningBox,
} from "./style";

interface PlaceListHeaderProps {
  title: ReactNode;
  category: ReactNode;
  filter?: ReactNode;
  showSearchBar?: boolean;
}

const PlaceListHeader = memo(
  ({ title, category, filter, showSearchBar = true }: PlaceListHeaderProps) => {
    const [locPermission] = useGeolocation();

    return (
      <SHeader>
        {showSearchBar && <SSearchBar />}
        {title}
        <SWarningBox showWarning={!locPermission}>
          <SaBox>
            <SLocSVG />
            <SaP>
              펫플레이스 거리순 정렬에 위치 정보를 사용합니다. 위치 정보 권한을
              확인해주세요.
            </SaP>
          </SaBox>

          <SbP>{`검색 기준 위치: ${INITIAL_LOCATION.address}`}</SbP>
        </SWarningBox>

        {category}
        {filter}
      </SHeader>
    );
  }
);

export default PlaceListHeader;
