"use client";

export const dynamic = "force-dynamic";

import React, { Suspense, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function UnlockInner() {
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const router = useRouter();
  const sp = useSearchParams();

  const from = useMemo(() => sp.get("from") || "/", [sp]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pwd }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErr(data?.message || "密码错误");
        return;
      }

      router.replace(from);
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="text-sm text-gray-500 mb-2">landing.fulizhe.com 已加密</div>
        <h1 className="text-2xl font-bold mb-4">请输入访问密码</h1>

        <form onSubmit={onSubmit} className="space-y-3">
          <input
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            placeholder="密码"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />

          {err ? <div className="text-sm text-red-600">{err}</div> : null}

          <button
            className="w-full rounded-xl bg-blue-600 text-white py-3 font-semibold disabled:opacity-60"
            disabled={loading || !pwd}
            type="submit"
          >
            {loading ? "验证中..." : "进入"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default function UnlockPage() {
  return (
    <Suspense fallback={<div className="p-6">加载中...</div>}>
      <UnlockInner />
    </Suspense>
  );
}
