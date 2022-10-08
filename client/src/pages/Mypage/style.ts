import styled, { css } from "styled-components";

import { mobile } from "../../assets";

export const SContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 100px 0px 100px 0px;
  align-items: center;
  gap: 24px;
  min-height: calc(100vh - 380px);
  font-family: "ONE-Mobile-Regular";

  ${mobile(css`
    padding-top: 40px;
    margin: 10px 0px 0px 0px;
    justify-content: flex-start;
    gap: 10px;
  `)}
  &
    > h1 {
    font-size: 32px;
    font-weight: bold;
    ${mobile(css`
      font-weight: 400;
      font-size: 30px;
      padding-top: 0px;
    `)}
  }
`;

export const SUserContainer = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid ${({ theme }) => theme.colors.black050};
  display: flex;
  justify-content: center;

  ${mobile(css`
    flex-direction: column;
    border: none;
    justify-content: center;
    align-items: center;
  `)}
`;

export const SMyInfoContainer = styled.div`
  width: 25%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 82px;

  ${mobile(css`
    width: 100%;
    height: auto;
    flex-direction: row;
    align-items: center;
    padding: 0px;
  `)}

  & > div {
    width: 100%;
    font-size: 26px;
    font-weight: bold;
    gap: 30px;
    color: ${({ theme }) => theme.colors.black500};

    ${mobile(css`
      flex-direction: row;
      font-size: 20px;
      width: 100%;
      height: 160px;
      border-bottom: 0.4px solid #d6d6d6;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-top: 5px;
      flex-wrap: wrap;
      gap: 10px;
    `)}
  }
`;

export const SMyInfo = styled.div`
  width: 160px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  cursor: pointer;

  ${mobile(css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  `)}
`;

export const SUserImg = styled.div`
  gap: 40px;
  width: 160px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > img {
    width: 160px;
    height: 160px;
    border-radius: 50%;

    ${mobile(css`
      width: 80px;
      height: 80px;
      margin-left: 25px;
    `)}
  }

  & > div {
    ${mobile(css`
      width: auto;
      margin-left: 25px;
    `)}
  }

  ${mobile(css`
    gap: 15px;
    width: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `)}
`;

export const SLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 200;
  width: 140px;
  gap: 10px;

  & > svg {
    align-items: flex-end;
  }

  ${mobile(css`
    padding-top: 20px;
    flex-direction: column;
    width: auto;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-left: 15px;
  `)}
`;

export const SMyContents = styled.div`
  width: 70%;
  overflow: auto;
  height: auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  ${mobile(css`
    flex-direction: row;
    width: auto;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  `)}
`;

export const SBorderLine = styled.span`
  margin: 5% 0%;
  align-items: center;
  border-left: 1px solid ${({ theme }) => theme.colors.black050};
  height: 1230px;

  ${mobile(css`
    display: none;
  `)}
`;

export const SWritePost = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 0px 10px 0px;
  font-size: 20px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.black500};

  :hover {
    color: ${({ theme }) => theme.colors.black200};
  }

  ${mobile(css`
    font-size: 16px;
    flex-direction: row;
    width: auto;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  `)}
`;

export const SEditUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 0px 10px 0px;
  font-size: 20px;
  width: 100%;
  color: ${({ theme }) => theme.colors.black500};

  :hover {
    color: ${({ theme }) => theme.colors.black200};
  }

  ${mobile(css`
    font-size: 16px;
    flex-direction: row;
    width: auto;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  `)}
`;

export const SRegistCompany = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 0px 10px 0px;
  font-size: 20px;
  width: 100%;
  color: ${({ theme }) => theme.colors.black500};

  :hover {
    color: ${({ theme }) => theme.colors.black200};
  }

  ${mobile(css`
    font-size: 16px;
    flex-direction: row;
    width: auto;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  `)}
`;

export const SResignation = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 0px 10px 0px;
  font-size: 20px;
  width: 100%;
  color: ${({ theme }) => theme.colors.black500};

  :hover {
    color: ${({ theme }) => theme.colors.black200};
  }

  ${mobile(css`
    font-size: 16px;
    flex-direction: row;
    width: auto;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  `)}
`;
