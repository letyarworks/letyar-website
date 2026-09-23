import { Suspense } from "react";
import { redirect } from "next/navigation";
import DashboardClient from "@/components/DashboardClient";
import { createClient } from "@/lib/supabase/server";

export const metadata = { title: "Dashboard — Letyar" };

export default async function DashboardPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <>
      <div className="mx-auto flex max-w-4xl items-center justify-between border-b border-white/10 px-6 py-4">
        <p className="font-mono text-[11px] text-slate">
          Signed in as <span className="text-paper">{user.email}</span>
        </p>
        <form action="/logout" method="post">
          <button type="submit" className="font-mono text-[11px] text-slate transition hover:text-paper">
            Log out
          </button>
        </form>
      </div>
      <Suspense fallback={<div className="px-6 py-24 text-center font-mono text-sm text-slate">Loading dashboard…</div>}>
        <DashboardClient />
      </Suspense>
    </>
  );
}
