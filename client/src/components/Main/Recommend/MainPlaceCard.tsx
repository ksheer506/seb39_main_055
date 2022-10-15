import { AiOutlineLine } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import { mobile } from "../../../assets";

interface RecommendProps {
  id: number;
  image: string;
  category: string;
  title: string;
  date: string;
  alt: string;
  textTitle: string;
  textLine1: string;
  textLine2: string;
  link: string;
  isEven: boolean;
}

const SLink = styled(Link)`
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
  row-gap: 5px;
  line-height: 20px;
`;

const TextTitle = styled.div`
  color: ${({ theme }) => theme.colors.black500};
  font-size: 25px;
`;

const TextLine1 = styled.div`
  color: ${({ theme }) => theme.colors.black400};
  font-size: 14px;

  ${mobile(css`
    width: 300px;
    flex-wrap: wrap;
  `)}
`;

const TextLine2 = styled.div`
  color: ${({ theme }) => theme.colors.black400};
  font-size: 16px;

  ${mobile(css`
    width: 300px;
    flex-wrap: wrap;
  `)}
`;

const Date = styled.div`
  color: ${({ theme }) => theme.colors.black100};
  margin: 10px 0px 15px 0px;
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
  textLine1,
  textLine2,
  link,
  isEven,
}: RecommendProps) => {
  return (
    <SLink to={`/place/${id}`}>
      <section>
        <SImageBox isEven={isEven}>
          <Image src={image} alt={alt} />
        </SImageBox>
        <div>
          <Category>{category}</Category>
          <TextTitle>{textTitle}</TextTitle>
          <AiOutlineLine size={25} />
          <STextBox>
            <TextLine1>{textLine1}</TextLine1>
            <TextLine2>{textLine2}</TextLine2>
            <Date>{date}</Date>
          </STextBox>
        </div>
      </section>
    </SLink>
  );
};

export default MainPlaceCard;
