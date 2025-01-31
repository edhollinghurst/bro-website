import { generateShortcutIcon } from "./components/ShortcutIcon";

export function generateImageMetadata() {
  return [
    {
      contentType: "image/png",
      size: { width: 16, height: 16 },
      id: "favicon-16",
    },
    {
      contentType: "image/png",
      size: { width: 32, height: 32 },
      id: "favicon-32",
    },
    {
      contentType: "image/png",
      size: { width: 192, height: 192 },
      id: "android-chrome-192",
    },
    {
      contentType: "image/png",
      size: { width: 512, height: 512 },
      id: "android-chrome-512",
    },
  ];
}

export default function Icon({ id }: { id: string }) {
  const size =
    id === "favicon-16"
      ? 16
      : id === "favicon-32"
      ? 32
      : id === "android-chrome-192"
      ? 192
      : 512;
  return generateShortcutIcon(size);
}
