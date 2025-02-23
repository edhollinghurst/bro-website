import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "British Rainbow Open - LGBTQ+ Golf Tournament"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(to right, #ef4444, #eab308, #3b82f6)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          padding: "32px 48px",
          borderRadius: "16px",
          textAlign: "center" as const,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            color: "#1e3a8a",
            marginBottom: "16px",
          }}
        >
          BRITISH RAINBOW OPEN
        </h1>
        <p
          style={{
            fontSize: "32px",
            fontWeight: 600,
            color: "#1e40af",
            marginBottom: "24px",
          }}
        >
          11-13 September 2025
        </p>
        <p
          style={{
            fontSize: "24px",
            color: "#374151",
            marginBottom: "16px",
          }}
        >
          The Premier LGBTQ+ Golf Tournament in the UK
        </p>
        <p
          style={{
            fontSize: "20px",
            color: "#4b5563",
          }}
        >
          Dalmahoy Hotel & Country Club • Edinburgh, Scotland
        </p>
      </div>
    </div>,
    {
      ...size,
    },
  )
}

