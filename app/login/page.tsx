import Link from "next/link";
import RidgeMark from "@/components/RidgeMark";
import LoginForm from "@/components/LoginForm";

export const metadata = { title: "Log in — Letyar" };

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  const callbackError = searchParams.error === "auth_callback";

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-16">
      <Link href="/" className="mb-8 flex items-center gap-2.5">
        <RidgeMark size={28} />
        <span className="font-display text-lg font-semibold text-paper">Letyar</span>
      </Link>

      <h1 className="font-display text-2xl font-semibold text-paper">Log in</h1>
      <p className="mt-2 font-body text-sm text-mist">
        Access your project dashboard and files.
      </p>

      {callbackError && (
        <p className="mt-6 border border-lacquer/30 bg-lacquer/10 px-4 py-3 font-body text-sm text-paper">
          Your email confirmation link could not be completed. Please try again.
        </p>
      )}

      <LoginForm />

      <p className="mt-6 font-body text-sm text-mist">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-cyan hover:text-paper">Sign up</Link>
      </p>
    </section>
  );
}
