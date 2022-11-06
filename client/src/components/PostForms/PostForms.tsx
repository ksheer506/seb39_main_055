/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import { Editor } from "@toast-ui/react-editor";
import { AxiosResponse } from "axios";
import {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { MutationFunction, useMutation, UseMutationOptions } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { selectUserInfos, useAppSelector } from "../../redux";
import {
  ThreadErrorResponse,
  ThreadForm,
  ThreadImages,
  ThreadPostResponse,
} from "../../types";
import { getTimeDifference, localStorageParser } from "../../utils";
import CustomEditor from "../Editor/CustomEditor/CustomEditor";
import PreviewImages from "./PreviewImages/PreviewImages";
import { SBox, SButton, SEditorBox, SForm, SH1, SPostSection } from "./style";

interface PostFormsProps {
  threadId?: number;
  body?: string;
  threadImages?: ThreadImages[];
  updatedAt?: string;
  buttonText: string;
  mutation: MutationFunction<AxiosResponse<ThreadPostResponse>, ThreadForm>;
  mutateOptions?: Omit<
    UseMutationOptions<
      AxiosResponse<ThreadPostResponse>,
      ThreadErrorResponse,
      ThreadForm
    >,
    "mutationFn"
  >;
}

interface LocalStorageData {
  lastModified: string;
  body: string;
}

function loadLocalStorageBody(
  userId: number,
  body?: string,
  updatedAt?: string,
  threadId?: number
) {
  const initial = { lastModified: "", body: "" };

  // 새 게시물을 작성하는 상황
  if (!threadId || !updatedAt) {
    const { body: savedBody } = localStorageParser<LocalStorageData>(
      `newPost@${userId}`,
      initial
    );

    if (savedBody) {
      return savedBody;
    }
    return "";
  }

  // 게시글을 수정하는 상황
  const { lastModified, body: savedBody } =
    localStorageParser<LocalStorageData>(`post/${threadId}`, initial);
  const isLatest = getTimeDifference(updatedAt, lastModified) > 500;

  if (isLatest) {
    return savedBody;
  }
  return body;
}

const PostForms = ({
  threadId,
  body = "",
  threadImages = [],
  updatedAt,
  buttonText,
  mutation,
  mutateOptions,
}: PostFormsProps) => {
  const { userId = -1 } = useAppSelector(selectUserInfos) || {};
  const [images, setImages] = useState<ThreadImages[]>(threadImages);
  const [bodyErr, setBodyErr] = useState(false);
  const editorRef = useRef<Editor>(null);
  const navigate = useNavigate();
  const { mutate, data, isLoading, isSuccess } = useMutation(
    mutation,
    mutateOptions
  );

  const getBodyHTML = useCallback((editor: RefObject<Editor>) => {
    if (!editor.current) return "";

    return editor.current.getInstance().getHTML();
  }, []);

  const saveTempBody = useCallback(
    (body: string, userId: number, threadId?: number) => {
      const lastModified = new Date();
      let key = `post/${threadId}`;

      if (!threadId) {
        key = `newPost@${userId}`;
      }
      localStorage.setItem(key, JSON.stringify({ lastModified, body }));
    },
    []
  );

  const removeSavedTempBody = useCallback(
    (userId: number, threadId?: number) => {
      if (threadId) {
        localStorage.removeItem(`post/${threadId}`);
        return;
      }
      localStorage.removeItem(`newPost@${userId}`);
    },
    []
  );

  const checkBodyValidity = useCallback(() => {
    const body = getBodyHTML(editorRef);

    if (body.match(/^(<p>(<br>|\s{1,})<\/p>)$/g)) {
      setBodyErr(true);
      return false;
    }

    setBodyErr(false);
    return true;
  }, []);

  const handleSubmit = async () => {
    const isValid = checkBodyValidity();

    if (!isValid) return;

    mutate({ images, body, threadId });
    removeSavedTempBody(userId, threadId);
  };

  const savedBody = useMemo(
    () => loadLocalStorageBody(userId, body, updatedAt, threadId),
    [userId, body, updatedAt, threadId]
  );

  useEffect(() => {
    if (savedBody === body) return;

    toast.info("임시 저장된 본문을 불러왔습니다.");
  }, [savedBody, body]);

  useEffect(() => {
    if (isSuccess) {
      const { threadId } = data.data;

      navigate(`/post/${threadId}`, { replace: true });
    }
  }, [isSuccess]);

  return (
    <SForm
      onSubmit={(e) => e.preventDefault()}
      onBlur={() => saveTempBody(getBodyHTML(editorRef), userId, threadId)}
    >
      <SBox>
        <SH1>반려동물과 관련된 다양한 정보를 공유해요!</SH1>
        <SPostSection>
          <SEditorBox>
            <CustomEditor
              value={savedBody}
              editorRef={editorRef}
              isError={bodyErr}
              errorMessage="한 글자 이상 입력해주세요."
            />
          </SEditorBox>
          <PreviewImages images={images} setImages={setImages} />
        </SPostSection>
      </SBox>
      <SButton onClick={handleSubmit} isPending={isLoading}>
        {buttonText}
      </SButton>
    </SForm>
  );
};

export default PostForms;
