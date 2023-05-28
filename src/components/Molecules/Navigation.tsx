"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ActiveLink } from "@/store/activeLink";

type LinkProps = {
  href: string;
  label: string;
};

type Props = {
  ListLinks: LinkProps[];
};

export const Navigation = ({ ListLinks }: Props) => {
  const pathname = usePathname();
  const { hrefLink } = ActiveLink();
  return (
    <>
      {ListLinks.map(({ href, label }) => {
        const isActive = href === hrefLink;
        // const isActive = false;
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
