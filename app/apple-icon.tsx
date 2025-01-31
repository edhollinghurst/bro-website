import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg
        width="180"
        height="180"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF0000" />
            <stop offset="50%" stopColor="#00FF00" />
            <stop offset="100%" stopColor="#0000FF" />
          </linearGradient>
        </defs>
        {/* Background circle with rainbow gradient */}
        <circle cx="50" cy="50" r="50" fill="url(#rainbow)" />
        {/* Golf ball */}
        <circle cx="50" cy="50" r="40" fill="white" />
        {/* Dimple pattern - simplified for better visibility */}
        <circle cx="35" cy="35" r="5" fill="#333" />
        <circle cx="65" cy="35" r="5" fill="#333" />
        <circle cx="50" cy="50" r="5" fill="#333" />
        <circle cx="35" cy="65" r="5" fill="#333" />
        <circle cx="65" cy="65" r="5" fill="#333" />
      </svg>
    ),
    {
      ...size,
    }
  );
}
