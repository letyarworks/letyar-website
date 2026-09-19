export default function RidgeMark({
  size = 32,
  animated = false,
  className = "",
}: {
  size?: number;
  animated?: boolean;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g stroke="#F7FAFC" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M18 16 V48 A34 34 0 0 0 52 82 H82"
          pathLength={1}
          className={animated ? "dashline" : ""}
          style={animated ? { animationDelay: "0.1s" } : undefined}
        />
        <path
          d="M30 16 V48 A22 22 0 0 0 52 70 H82"
          stroke="#19D3E6"
          pathLength={1}
          className={animated ? "dashline" : ""}
          style={animated ? { animationDelay: "0.28s" } : undefined}
        />
        <path
          d="M42 16 V48 A10 10 0 0 0 52 58 H82"
          pathLength={1}
          className={animated ? "dashline" : ""}
          style={animated ? { animationDelay: "0.46s" } : undefined}
        />
      </g>
      <circle
        cx="52"
        cy="48"
        r="4.5"
        fill="#E0B04B"
        className={animated ? "animate-rise" : ""}
        style={animated ? { animationDelay: "0.7s" } : undefined}
      />
    </svg>
  );
}
