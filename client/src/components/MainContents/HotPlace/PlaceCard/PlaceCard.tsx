/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { TbCrown } from "react-icons/tb";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const SBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 130px;
`;

const SLink = styled(Link)`
  display: flex;
  width: 100%;
  box-shadow: 0px 0px 1px grey;
  transition: 0.4s all;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  & > img {
    width: 40%;
    height: 100%;
    max-width: 300px;
    object-fit: cover;
  }
`;

const StoreInfoBox = styled.section`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 20px;

  & > span {
    color: ${({ theme }) => theme.colors.black200};
    font-size: 14px;
  }

  & > p {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    color: ${({ theme }) => theme.colors.black500};
    font-size: 18px;
    line-height: 23px;
  }
`;

const RankSVG = styled(TbCrown)<{ rank: number }>`
  ${({ rank }) =>
    rank >= 4 &&
    css`
      display: none;
    `}
`;

const RankBox = styled.div`
  flex: 0 1 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  row-gap: 2px;

  & > h1 {
    font-size: 23px;
    font-weight: bold;
  }
`;

interface Props {
  rank: number;
  storeId: string;
  img: string;
  location: string;
  name: string;
}

const PlaceCard = ({ rank, img, location, name, storeId }: Props) => {
  const [province, district] = location.match(/(.*?)[시|구|군]/g)!;

  if (province.length <= 3) {
    location = `${province}${district}`;
  }
  if (province.length > 3) {
    location = province;
  }

  return (
    <SBox>
      <RankBox>
        <RankSVG rank={rank} />
        <h1>{rank}</h1>
      </RankBox>
      <SLink to={`/place/${storeId}`}>
        <img src={img} alt="place" />
        <StoreInfoBox>
          <span>{location}</span>
          <p>{name}</p>
        </StoreInfoBox>
      </SLink>
    </SBox>
  );
};

export default PlaceCard;
