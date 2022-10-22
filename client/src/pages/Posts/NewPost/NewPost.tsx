import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { submitNewPost } from "../../../apis";
import PostForms from "../../../components/PostForms/PostForms";
import { selectUserInfos, useAppSelector } from "../../../redux";

const NewPost = () => {
  const { userId = -1 } = useAppSelector(selectUserInfos) || {};
  const navigate = useNavigate();

  useEffect(() => {
    if (userId >= 0) return;

    toast.warn("로그인해주세요.");
    navigate("/login");
  });

  return <PostForms buttonText="등록하기" mutation={submitNewPost} />;
};

export default NewPost;
