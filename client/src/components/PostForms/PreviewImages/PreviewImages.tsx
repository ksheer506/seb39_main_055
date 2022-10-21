/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { toast } from "react-toastify";

import { ThreadImages } from "../../../types";
import { extractImageInfos, throttle } from "../../../utils";
import { InteractiveImage, useModal } from "../..";
import DefaultImgSelect from "../DefaultImgSelect/DefaultImgSelect";
import {
  SaBox,
  SaButton,
  SaLabel,
  SbBox,
  SCanvas,
  SFileInput,
  SImageAside,
  SList,
  SMore,
  SRepImg,
  SThumbnailUList,
} from "./style";

export interface PostImagesProps {
  images: ThreadImages[];
  setImages: Dispatch<SetStateAction<ThreadImages[]>>;
  ErrorMessage?: ReactNode;
}

interface WorkerMessage {
  images: ThreadImages[];
  error: string;
}

const MAX_IMAGES = 15;

function isOffscreenCanvasAvailable(canvas: any) {
  return !!canvas?.transferControlToOffscreen;
}

const PreviewImages = ({
  images,
  setImages,
  ErrorMessage,
}: PostImagesProps) => {
  const workers = useRef<Worker[]>([]);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [defaultId, setDefaultId] = useState("");
  const { openModal, closeModal } = useModal();

  const handleUnsupportedDevice = useCallback(async (images: FileList) => {
    const imgInfos = await extractImageInfos([...images]);

    setImages((prev) => [...prev, ...imgInfos]);
    /* for await (const imagePacking of imgInfos) {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          setImages((prev) => [...prev, imagePacking]);
          resolve();
        }, 0);
      });
    } */
  }, []);

  const postImagesToWorkers = useCallback((images: FileList) => {
    const workerInst = workers.current.length;
    const L = Math.ceil((images || []).length / workerInst);

    workers.current.forEach((wk, i) => {
      const startI = L * i + i;
      let endI = startI + L + 1;
      if (endI > images.length) {
        endI = images.length;
      }

      const imagePacking = [...images].slice(startI, endI);
      const canvas = document.createElement("canvas");
      // @ts-ignore
      const offscreen = canvas?.transferControlToOffscreen();

      wk.addEventListener(
        "message",
        function callee({ data }: MessageEvent<WorkerMessage>) {
          const { images, error } = data;

          if (images.length) {
            setImages((prev) => [...prev, ...images]);
          }
          if (error) {
            // 한번에 둘 이상의 Toast가 뜨지 않도록 throttling
            throttle(() => toast.error(error), 100);
          }

          wk.removeEventListener("message", callee);
        }
      );

      wk.postMessage({ images: imagePacking, canvas: offscreen }, [offscreen]);
    });
  }, []);

  const handleSelectImages = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const selectedImages = e.target.files;

      if (!selectedImages?.length) return;

      // offscreenCanvas 미지원 브라우저
      if (!isOffscreenCanvasAvailable(canvas.current)) {
        await handleUnsupportedDevice(selectedImages);

        return;
      }

      postImagesToWorkers(selectedImages);
    },
    []
  );

  const removeImg = useCallback((targetId: string) => {
    setImages((prev) => prev.filter((image) => image.id !== targetId));
  }, []);

  useEffect(() => {
    if (!workers.current) return;

    const maxWorker = navigator.hardwareConcurrency || 2;

    workers.current = new Array(maxWorker).fill(0).map(() => {
      return new Worker(
        new URL("../../../utils/imageLoad.worker.ts", import.meta.url)
      );
    });

    return () => {
      workers.current.forEach((wk) => wk.terminate());
    };
  }, []);

  const defaultImage =
    images.filter(({ id }) => id === defaultId)[0] || images[0];

  return (
    <SImageAside>
      <SaBox>
        <SbBox>
          {!!images.length && (
            <SRepImg src={defaultImage.uri} alt="대표 이미지" />
          )}
          <SaLabel>
            <p>사진을 추가해주세요.</p>
            <p>(Ctrl 또는 Shift로 다중 선택)</p>
          </SaLabel>
          <SFileInput accept="image/*" onChange={handleSelectImages} />
        </SbBox>

        <SaButton
          type="button"
          onClick={() =>
            openModal(
              <DefaultImgSelect
                images={images}
                defaultId={defaultId}
                setDefaultId={setDefaultId}
                closeModal={closeModal}
              />
            )
          }
        >
          <p>대표사진 변경</p>
          <SMore />
        </SaButton>
        {ErrorMessage}
      </SaBox>
      <SThumbnailUList>
        {images.map(({ uri, id }, i) => (
          <SList key={id}>
            <InteractiveImage
              label="클릭해서 제거"
              hoverColor="#ff1c1ca7"
              imageURL={uri}
              alt={`${i}-th image to upload`}
              onClick={() => removeImg(id)}
            />
          </SList>
        ))}
      </SThumbnailUList>
      <SCanvas ref={canvas} />
    </SImageAside>
  );
};

export default PreviewImages;
