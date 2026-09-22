import Link from "next/link";
import RidgeMark from "@/components/RidgeMark";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center px-6 py-24">
      <RidgeMark size={36} />
      <h1 className="mt-6 font-display text-3xl font-semibold text-paper">
        Page not found
      </h1>
      <p className="mt-3 font-body text-sm text-mist">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-sm bg-cyan px-6 py-3 font-mono text-sm font-medium text-ink transition hover:bg-paper"
      >
        Back home
      </Link>
    </section>
  );
}
