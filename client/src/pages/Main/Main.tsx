import {
  Header,
  HotPlace,
  PostsBanner,
  Recommend,
  Review,
} from "../../components";
import * as S from "./style";

const Main = () => {
  return (
    <S.Container>
      <section className="main-contents">
        <S.ABox>
          <Header />
          <S.BBox>
            <PostsBanner />
            <Recommend />
            <HotPlace />
            <Review />
          </S.BBox>
        </S.ABox>
      </section>
    </S.Container>
  );
};

export default Main;
