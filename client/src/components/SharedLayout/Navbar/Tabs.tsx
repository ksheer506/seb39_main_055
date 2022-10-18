import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { colors } from "../../../assets";
import { logOutUser, useAppDispatch } from "../../../redux";

export const SUserContainer = styled.section`
  display: flex;
  flex-flow: column wrap;
  color: #434343;

  & > * {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    height: 40px;
    background-color: white;
    border: 0;
    padding: 10px 20px;
    font-size: 14px;
    transition: 600ms all;
  }

  & > *:hover {
    background-color: ${colors("black010")};
    transition: 600ms all;
  }
`;

export const DefaultTab = () => {
  const navigate = useNavigate();

  return (
    <SUserContainer>
      <button type="button" onClick={() => navigate("/place/list")}>
        펫플레이스
      </button>
      <button type="button" onClick={() => navigate("/post/list")}>
        댕댕이숲
      </button>
      <button type="button" onClick={() => navigate("/login")}>
        로그인
      </button>
      <button type="button" onClick={() => navigate("/signup")}>
        회원가입
      </button>
    </SUserContainer>
  );
};

export const UserTab = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
    navigate("/");
  };

  return (
    <SUserContainer>
      <Link to="/mypage">마이페이지</Link>
      <button type="button" onClick={handleLogout}>
        로그아웃
      </button>
    </SUserContainer>
  );
};
