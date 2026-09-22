import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Letyar Labs — Web, Software & Product";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0B1220",
          color: "#F7FAFC",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <svg width="96" height="96" viewBox="0 0 1024 1024">
            <g
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="48"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M260 252V508C260 672 374 768 544 768H760" />
              <path d="M352 252V508C352 616 427 672 544 672H760" />
              <path d="M448 252V508C448 560 484 576 544 576H760" />
            </g>
            <circle cx="527" cy="504" r="37" fill="#FFFFFF" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "42px", fontWeight: 700 }}>Letyar Labs</div>
            <div style={{ fontSize: "22px", color: "#94A3B8" }}>
              Yangon, Myanmar
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "66px",
              fontWeight: 700,
              letterSpacing: "-2px",
              lineHeight: 1.05,
            }}
          >
            Web · Software · Product
          </div>
          <div style={{ fontSize: "32px", color: "#19D3E6" }}>
            Every build carries a fingerprint.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: "20px", color: "#94A3B8" }}>
          letyarlabs.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
