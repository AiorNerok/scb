"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkProps = {
  href: string;
  label: string;
  listChildLink: string[];
};

type Props = {
  ListLinks: LinkProps[];
};

export const Navigation = ({ ListLinks }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {ListLinks.map(({ href, label, listChildLink }) => {
        const isActive = listChildLink.includes(pathname);
        return (
          <Link
            key={label}
            href={href}
            className={`h-[50px] flex items-center pl-5 text-black transition-all duration-150 hronit-link hronit-link-hover ${
              isActive ? "bg-black text-white" : ""
            }`}
          >
            {label}
          </Link>
        );
      })}
    </>
  );
};
