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
    <img
      src="/brand/logo/logo.svg"
      width={size}
      height={size}
      className={className}
      alt="Letyar"
    />
  );
}
