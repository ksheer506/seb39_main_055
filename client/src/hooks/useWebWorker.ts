/* eslint-disable consistent-return */
import { useEffect, useRef } from "react";

function createWorkerPath(url: URL) {
  const link = `importScripts('${url}')`;

  return URL.createObjectURL(new Blob([link]));
}

/**
 *
 * @param workerURL src 폴더에 대해 상대적인 경로
 * @returns
 */
const useWebWorker = (workerURL: string) => {
  const workers = useRef<Worker[]>([]);

  useEffect(() => {
    if (!workers.current) return;

    const maxWorker = navigator.hardwareConcurrency || 2;

    workers.current = new Array(maxWorker).fill(0).map(() => {
      return new Worker(new URL(`../${workerURL}`, import.meta.url));
    });

    return () => {
      workers.current.forEach((wk) => wk.terminate());
    };
  }, [workerURL]);

  return { workers: workers.current };
};

export default useWebWorker;
