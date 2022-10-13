import styled from "styled-components";

import Img2 from "../../../assets/images/carousel/2.jpg";
import Img3 from "../../../assets/images/carousel/3.jpg";
import Img4 from "../../../assets/images/carousel/4.jpg";
import Img5 from "../../../assets/images/carousel/5.jpg";
import Carousel from "../../Carousel/Carousel";
import Banner, { BannerProps } from "./Banner";

const SHeader = styled.header`
  width: 100vw;
  height: max-content;
`;

const carouselItems = [
  {
    image: Img3,
    summary: "산속에서 반려동물과 함께 힐링을",
    place: "충주 ‘켄싱턴리조트 충주’",
    link: "/place/list",
  },
  {
    image: Img4,
    summary: "도심 속 반려동물 동반 고급 호텔",
    place: "고양 일산 ‘소노캄 고양’",
    link: "/place/list",
  },
  {
    image: Img5,
    summary: "반려견과 함께 즐기는 호캉스",
    place: "서울 중구 ‘프레이저 플레이스 센트럴 서울’",
    link: "/place/list",
  },
  {
    image: Img2,
    summary: "반려동물을 위한 호텔",
    place: "부산 해운대 ‘더 펫텔 프리미엄 스위트’",
    link: "/place/list",
  },
];

function bannerGenerator(details: BannerProps[]) {
  return details.map(({ image, summary, place, link }, i) => {
    return {
      item: (
        <Banner image={image} summary={summary} place={place} link={link} />
      ),
      id: i,
    };
  });
}

const Header = () => {
  return (
    <SHeader>
      <Carousel items={bannerGenerator(carouselItems)} />
    </SHeader>
  );
};

export default Header;
