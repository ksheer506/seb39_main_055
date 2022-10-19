import React, { MouseEvent, useState } from "react";
import { useQuery } from "react-query";

import { getPlaceList } from "../../../apis";
import { DUMMY_BUTTON, DUMMY_CATEGORY_LIST } from "./data";
import PlaceCard from "./PlaceCard/PlaceCard";
import {
  Container,
  SButtonContainer,
  SImgContainer,
  SListContainer,
  SLoading,
  SMainContainer,
  SSection,
} from "./style";

const HotPlace = () => {
  const [buttonIndex, setButtonIndex] = useState(0);

  const handleBtnClick = ({ target }: MouseEvent<HTMLButtonElement>) => {
    if (!(target instanceof HTMLButtonElement)) return;

    setButtonIndex(Number(target.value));
  };

  /* const { data, isLoading } = useQuery(
    ["hotPlace", DUMMY_CATEGORY_LIST[buttonIndex as number]],
    () => getPlaceList(DUMMY_CATEGORY_LIST[buttonIndex as number])
  ); */

  return (
    <Container>
      <header>
        <h3>요즘 많이 찾는 핫 플레이스</h3>
        <p>다른 사람들이 많이 찾는 장소는?</p>
      </header>
      <SSection>
        <SImgContainer>
          {/* {data && data[0] && (
            <img src={data[0].storeImages[0].storeImage} alt="hotel" />
          )} */}
        </SImgContainer>
        <SMainContainer>
          <SButtonContainer>
            {DUMMY_BUTTON.map((el, idx) => (
              <React.Fragment key={el.id}>
                <button
                  type="button"
                  value={el.id}
                  className={idx === buttonIndex ? "active" : ""}
                  onClick={handleBtnClick}
                >
                  {el.name}
                </button>
                <div />
              </React.Fragment>
            ))}
          </SButtonContainer>
          {/* <SListContainer>
            {isLoading ? (
              <SLoading />
            ) : (
              data?.map((store) => (
                <PlaceCard
                  key={store.storeId}
                  storeId={store.storeId}
                  img={store.storeImages[0].storeImage}
                  location={store.addressName}
                  name={store.storeName}
                />
              ))
            )}
          </SListContainer> */}
        </SMainContainer>
      </SSection>
    </Container>
  );
};

export default HotPlace;
