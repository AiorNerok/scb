"use client";

import { IconCloud } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.svg";

export default function Page() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-prime-bg">
      <div className="fixed top-6 left-6">
        <Image src={Logo} alt="logo" />
      </div>
      <div className="space-y-4 flex flex-col min-w-[1200px] min-h-[650px] items-center justify-center rounded-2xl border bg-white hronit-shadow">
        <Link
          href="/create"
          className="flex flex-row align-baseline items-center justify-center w-[378px] border h-[138px] hronit-shadow"
        >
          <IconCloud stroke={1} size={84} fill="#49DBC8" />
          <span>Create a profile</span>
        </Link>
        <Link
          href="/"
          className="flex flex-row align-baseline items-center justify-center w-[378px] border h-[138px] hronit-shadow"
        >
          <IconCloud stroke={1} size={84} fill="#D2AFFF" />
          <span>Upload resume/CV</span>
        </Link>
      </div>
    </div>
  );
}
