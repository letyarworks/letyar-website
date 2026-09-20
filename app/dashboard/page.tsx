import { Suspense } from "react";
import DashboardClient from "@/components/DashboardClient";

export const metadata = { title: "Dashboard — Letyar" };

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="px-6 py-24 text-center font-mono text-sm text-slate">Loading dashboard…</div>}>
      <DashboardClient />
    </Suspense>
  );
}
