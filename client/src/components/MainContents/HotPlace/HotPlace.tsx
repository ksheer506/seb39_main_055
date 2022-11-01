import { useCallback, useState } from "react";
import { useQuery } from "react-query";

import { getPlaceList } from "../../../apis";
import { Select } from "../..";
import { CATEGORY_LIST } from "./data";
import PlaceCard from "./PlaceCard/PlaceCard";
import {
  Container,
  SListContainer,
  SLoading,
  SSection,
  STitleBox,
} from "./style";

const HotPlace = () => {
  const [selected, setSelected] = useState("숙소");
  const { data, isLoading } = useQuery(["hotPlace", selected], () =>
    getPlaceList(selected)
  );

  const handleSelected = useCallback((value: string) => {
    setSelected(value);
  }, []);

  return (
    <Container>
      <header>
        <STitleBox>
          <h3>요즘 많이 찾는 핫 플레이스: </h3>
          <Select
            options={CATEGORY_LIST}
            placeholder="카테고리 선택"
            onSelected={handleSelected}
            defaultValue="숙소"
          />
        </STitleBox>
        <p>다른 이용자들이 최근에 어느 장소에 머물렀는지 확인해보세요.</p>
      </header>
      <SSection>
        <SListContainer>
          {isLoading ? (
            <SLoading />
          ) : (
            data
              ?.slice(0, 5)
              .map(({ storeId, storeImages, storeName, addressName }, i) => (
                <li key={storeId}>
                  <PlaceCard
                    rank={i + 1}
                    storeId={storeId}
                    img={storeImages[0].storeImage}
                    location={addressName}
                    name={storeName}
                  />
                </li>
              ))
          )}
        </SListContainer>
      </SSection>
    </Container>
  );
};

export default HotPlace;
