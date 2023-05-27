'use client'

import { AppShell } from "@/shared";

export default function LkLayout({ children }: { children: React.ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
