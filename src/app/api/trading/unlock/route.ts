import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json().catch(() => ({ password: "" }));

  const real = process.env.SITE_PASSWORD || "";
  if (!real) {
    return NextResponse.json(
      { message: "服务器未设置密码（SITE_PASSWORD）" },
      { status: 500 }
    );
  }

  if (password !== real) {
    return NextResponse.json({ message: "密码错误" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });

  // ✅写 cookie：7 天有效（想每次都输入就把 maxAge 去掉并改成 session）
  res.cookies.set("site_unlock", "1", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}
