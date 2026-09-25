import { LoginForm } from "@/components/auth/LoginForm";
import Link from "next/link";

export const metadata = {
  title: "Sign In — Letyar",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-2">Sign in</h1>
        <p className="text-slate-400 mb-8">Access your Letyar dashboard</p>
        <LoginForm />
        <p className="text-center text-slate-400 mt-6">
          Don't have account? <Link href="/auth/signup" className="text-cyan-400">Create one</Link>
        </p>
      </div>
    </div>
  );
}
