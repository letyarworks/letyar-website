import { SignupForm } from "@/components/auth/SignupForm";
import Link from "next/link";

export const metadata = {
  title: "Sign Up — Letyar",
};

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-2">Create account</h1>
        <p className="text-slate-400 mb-8">Start building with Letyar</p>
        <SignupForm />
        <p className="text-center text-slate-400 mt-6">
          Already have account? <Link href="/auth/login" className="text-cyan-400">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
