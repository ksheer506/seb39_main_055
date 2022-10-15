import { AiOutlineLine } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { colors, mobile } from "../../../assets";

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
  isEven: boolean;
}

const SCardList = styled.li`
  flex: 0 1 280px;
  transition: 0.4s ease-out;

  &:hover {
    opacity: 0.7;
    transition: 0.4s ease-out;
  }
`;

const SImageBox = styled.div<{ isEven: boolean }>`
  height: ${({ isEven }) => (isEven ? "340px" : "445px")};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${mobile(css`
    width: 400px;
    flex-wrap: wrap;
  `)}
`;

const Category = styled.div`
  margin: 15px 0px;
  color: ${({ theme }) => theme.colors.orange500};
  font-size: 14px;
`;

const STextBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  /* row-gap: 5px; */
  line-height: 20px;
`;

const TextTitle = styled.div`
  color: ${({ theme }) => theme.colors.black500};
  font-size: 25px;
`;

const TextLine = styled.div`
  color: ${colors("black250")};
  font-size: 16px;

  ${mobile(css`
    width: 300px;
    flex-wrap: wrap;
  `)}
`;

const Date = styled.div`
  color: ${({ theme }) => theme.colors.black100};
  margin: 10px 0px 0px 0px;
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
  isEven,
}: RecommendProps) => {
  return (
    <SCardList>
      <Link to={`/place/${id}`}>
        <section>
          <SImageBox isEven={isEven}>
            <Image src={image} alt={alt} />
          </SImageBox>
          <div>
            <Category>{category}</Category>
            <TextTitle>{textTitle}</TextTitle>
            <AiOutlineLine size={25} />
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
