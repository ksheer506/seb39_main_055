import { useMutation } from "react-query";
import { Navigate, useNavigate } from "react-router-dom";

import { deletePost } from "../../../../apis";
import { Dots } from "../../../../components";
import { selectUser, useAppSelector } from "../../../../redux";
import { Thread } from "../../../../types";
import { getDateToString } from "../../../../utils";
import { SUserInfo, SUtils } from "./style";

interface Props {
  data?: Thread;
}

const UserCard = ({ data }: Props) => {
  const navigate = useNavigate();
  const { userInfos } = useAppSelector(selectUser);
  const { mutate } = useMutation(deletePost, {
    onSuccess: () => navigate("/post/list"),
  });

  if (!data) {
    return <Navigate to="/not-found" />;
  }

  const { user, threadId, updatedAt, body, threadImages } = data;

  return (
    <SUtils>
      <SUserInfo>
        <img src={user?.image} alt="profile" />
        <span>{user?.nickname}</span>
        <span>{getDateToString(updatedAt)}</span>
      </SUserInfo>
      {userInfos?.userId === user?.userId && (
        <Dots
          deleteModalTitle="댕댕이 숲의 기록을 삭제하시겠습니까?"
          onEdit={() =>
            navigate("/post/edit", {
              state: {
                body,
                threadId,
                threadImages,
                updatedAt,
              },
            })
          }
          onDelete={() => mutate(threadId)}
        />
      )}
    </SUtils>
  );
};

export default UserCard;
