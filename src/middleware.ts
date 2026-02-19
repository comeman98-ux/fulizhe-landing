import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 放行 Next 静态资源/图标等
  if (
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  // 放行密码页 + 解锁接口（否则会死循环）
  if (pathname.startsWith("/unlock") || pathname.startsWith("/api/unlock")) {
    return NextResponse.next();
  }

  // 有 cookie 就放行
  const ok = req.cookies.get("site_unlock")?.value === "1";
  if (ok) return NextResponse.next();

  // 没 cookie → 跳转到密码页，并带上回跳地址
  const url = req.nextUrl.clone();
  url.pathname = "/unlock";
  url.searchParams.set("from", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/:path*"], // ✅全站保护（landing.fulizhe.com 这个项目全部页面都要密码）
};
