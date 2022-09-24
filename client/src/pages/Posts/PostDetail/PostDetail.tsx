import { useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import styled from "styled-components";

import { Slider } from "../../../components";
import { detailData } from "./data";
import ReplyCard from "./ReplyCard/ReplyCard";
import UserCard from "./UserCard/UserCard";

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1130px) {
    padding: 0 20px;
  }
`;

export const SMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  border-bottom: 3px solid #dbdbdb;

  & > h1 {
    color: #707070;
    font-size: 40px;
    /* font-family: "ONE-Mobile-Bold"; */
  }
`;

export const SImageContainer = styled.section`
  width: 100%;
  height: 650px;
  border-radius: 17px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 17px;
  }

  @media screen and (max-width: 750px) {
    height: 300px;
  }
`;

export const SBody = styled.p`
  margin: 100px 0;
  color: #161616;
  font-size: 18px;
  line-height: 35px;

  @media screen and (max-width: 750px) {
    margin: 50px 0;
  }
`;

export const SLikeContainer = styled.section<{ isLike: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 50px;

  & > svg {
    cursor: pointer;
    font-size: 30px;
    color: ${({ isLike }) => isLike && "#ffc107"};
    fill: ${({ isLike }) => isLike && "#ffc107"};
    transition: all 0.3s;
  }

  & > span {
    color: #161616;
    font-size: 20px;
    font-weight: 600;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

export const SCommentHeader = styled.header`
  margin-top: 55px;
  font-size: 18px;

  & > span:first-child {
    color: #161616;
    margin-right: 10px;
  }

  & > span:last-child {
    color: #ffc107;
  }
`;

export const SInputContainer = styled.section<{ isFocus: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  margin-top: 18px;
  margin-bottom: 55px;
  padding: 5px 10px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;

  & > input {
    width: 90%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 15px;
    font-family: "ONE-Mobile-Regular";

    &::placeholder {
      color: #dbdbdb;
      font-family: "ONE-Mobile-Regular";
    }
  }

  & > button {
    width: 65px;
    height: 100%;
    color: ${({ isFocus }) => (isFocus ? "#ffffff" : "#161616")};
    background-color: ${({ isFocus }) => (isFocus ? "#ffc107" : "#dbdbdb")};
    border: none;
    border-radius: 10px;
    font-size: 18px;
    font-family: "ONE-Mobile-Regular";
    transition: all 0.4s;
  }
`;

export const SListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 107px;
`;

const PostDetail = () => {
  const data = detailData;
  const [isLike, setIsLike] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <SContainer>
      <SMainContainer>
        <h1>댕댕이숲</h1>
        <UserCard
          threadId={data.threadId}
          threadImages={data.threadImages}
          body={data.body}
          user={data.user}
          updatedAt={data.updatedAt}
        />
        <SImageContainer>
          <Slider imageList={data.threadImages} />
        </SImageContainer>
        <SBody>{data.body}</SBody>
        <SLikeContainer isLike={isLike}>
          <HiOutlineHeart onClick={() => setIsLike((prev) => !prev)} />
          <span>{data.likes}</span>
        </SLikeContainer>
      </SMainContainer>
      <SCommentHeader>
        <span>댓글</span>
        <span>{data.replyList.length}</span>
      </SCommentHeader>
      <SInputContainer isFocus={isFocus}>
        {/** focus시 스타일 변경 */}
        <input
          type="text"
          placeholder="다양한 이야기를 공유해주세요 :)"
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        <button type="button">입력</button>
      </SInputContainer>
      <SListContainer>
        {data.replyList.map((reply) => (
          <ReplyCard
            key={reply.replyId}
            replyId={reply.replyId}
            replyBody={reply.replyBody}
            createdAt={reply.createdAt}
            user={reply.user}
          />
        ))}
      </SListContainer>
    </SContainer>
  );
};

export default PostDetail;