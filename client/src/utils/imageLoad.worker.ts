/* eslint-disable no-restricted-globals */
import { extractImageInfos } from "./imageProcessor";

interface WorkerData {
  images: File[];
  canvas: any;
}

interface compressOptions {
  maxSize?: number;
  convertTo?: "image/png" | "image/webp";
}

function filterLargeImages(images: File[], maxMB: number) {
  return images.filter((img) => {
    const megabytes = img.size / (1000 * 1000);

    if (megabytes >= maxMB) {
      return false;
    }

    return true;
  });
}

function downsizeDimensions(width: number, height: number, maxSize: number) {
  const ratio = height / width;

  if (width > height) {
    const W = width > maxSize ? maxSize : width;
    const H = W * ratio;

    return [W, H];
  }

  const H = height > maxSize ? maxSize : height;
  const W = H / ratio;

  return [W, H];
}

function compressImages(
  images: File[],
  canvas: any,
  options?: compressOptions
) {
  const ctx = canvas.getContext("2d");
  const incompatible = ["svg+xml", "gif"];
  const { maxSize = 1000, convertTo = "image/png" } = options || {};

  return Promise.all(
    images.map(async (img) => {
      const extension = img.type.split("/")[1]; // createImageBitmap() 미지원 포맷 - SVG, GIF

      if (incompatible.includes(extension)) return img;

      const image = await createImageBitmap(img);
      const { width, height } = image;
      const [W, H] = downsizeDimensions(width, height, maxSize);

      canvas.width = W;
      canvas.height = H;
      ctx.drawImage(image, 0, 0, W, H);

      return canvas.convertToBlob({ quality: 0.75, type: convertTo });
    })
  );
}

self.addEventListener("message", async ({ data }: MessageEvent<WorkerData>) => {
  const { images, canvas } = data;
  const error = "";

  const filtered = filterLargeImages(images, 10);
  const compressed = await compressImages(filtered, canvas, {
    convertTo: "image/webp",
  });

  const processed = await extractImageInfos(compressed);

  self.postMessage({ images: processed, error });
});
