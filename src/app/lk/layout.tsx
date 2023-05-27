"use client";

import { AppShell } from "@/shared";
import { motion } from "framer-motion";

export default function LkLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </AppShell>
  );
}
