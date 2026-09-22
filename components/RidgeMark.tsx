export default function RidgeMark({
  size = 32,
  className = "",
}: {
  size?: number;
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
