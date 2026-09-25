"use client";

import type { ReactNode } from "react";
import { usePathname } from "@/i18n/navigation";

// Case detail pages render their own top bar, so the global header steps aside.
export default function HeaderGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (/^\/cases\/[^/]+/.test(pathname)) return null;
  return <>{children}</>;
}
