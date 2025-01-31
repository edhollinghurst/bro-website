import { ImageResponse } from "next/og";

export function generateShortcutIcon(size: number) {
  return new ImageResponse(
    (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF0000" />
            <stop offset="33%" stopColor="#FFFF00" />
            <stop offset="67%" stopColor="#00FF00" />
            <stop offset="100%" stopColor="#0000FF" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="white"
          stroke="url(#rainbow)"
          strokeWidth="4"
        />
        <circle cx="35" cy="40" r="3" fill="#4CAF50" />
        <circle cx="65" cy="40" r="3" fill="#4CAF50" />
        <circle cx="50" cy="60" r="3" fill="#4CAF50" />
        <circle cx="35" cy="70" r="3" fill="#4CAF50" />
        <circle cx="65" cy="70" r="3" fill="#4CAF50" />
      </svg>
    ),
    { width: size, height: size }
  );
}
