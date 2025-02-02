import { AiOutlineLine } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { colors, fontSizes, mobile, tablet } from "../../../assets";

interface RecommendProps {
  id: number;
  image: string;
  category: string;
  title: string;
  date: string;
  alt: string;
  textTitle: string;
  textLine: string;
  link: string;
  stretched: boolean;
}

const SCardList = styled.li`
  flex: 0 1 280px;
  transition: 0.4s ease-out;

  &:hover {
    opacity: 0.7;
    transition: 0.4s ease-out;
  }

  ${tablet(css`
    min-width: 280px;
  `)}
`;

const SImageBox = styled.div<{ stretched: boolean }>`
  height: ${({ stretched }) => (stretched ? "340px" : "445px")};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${tablet(css`
    flex-wrap: wrap;
  `)}
`;

const Category = styled.div`
  margin: 12px 0px 10px 0px;
  color: ${({ theme }) => theme.colors.orange500};
  font-size: 14px;
`;

const STextBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  line-height: 20px;
`;

const TextTitle = styled.div`
  color: ${({ theme }) => theme.colors.black500};
  font-size: 25px;
`;

const TextLine = styled.div`
  color: ${colors("black250")};

  ${fontSizes("mainH5")}

  ${mobile(css`
    width: 280px;
    flex-wrap: wrap;
  `)}
`;

const Date = styled.div`
  color: ${({ theme }) => theme.colors.black100};
  margin: 8px 0px 0px 0px;
  font-size: 12px;
`;

const MainPlaceCard = ({
  id,
  image,
  category,
  title,
  date,
  alt,
  textTitle,
  textLine,
  link,
  stretched,
}: RecommendProps) => {
  return (
    <SCardList>
      <Link to={`/place/${id}`}>
        <section>
          <SImageBox stretched={stretched}>
            <Image src={image} alt={alt} />
          </SImageBox>
          <div>
            <Category>{category}</Category>
            <TextTitle>{textTitle}</TextTitle>
            <AiOutlineLine size={20} />
            <STextBox>
              <TextLine>{textLine}</TextLine>
              <Date>{date}</Date>
            </STextBox>
          </div>
        </section>
      </Link>
    </SCardList>
  );
};

export default MainPlaceCard;
