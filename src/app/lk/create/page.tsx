import { IconCloud } from "@tabler/icons-react";
import Link from "next/link";

export default function Page() {

  return (
    <div className="flex flex-row">
      <section className="flex-1 flex flex-col gap-5 p-10 items-center text-2xl font-semibold">
        <Link
          href="/lk/create/job"
          className="flex flex-row align-baseline items-center justify-center w-[378px] border h-[138px] hronit-shadow"
        >
          <IconCloud stroke={1} size={84} fill="#49DBC8" />
          <span>Create a Job</span>
        </Link>
        <Link
          href="/lk"
          className="flex flex-row align-baseline items-center justify-center w-[378px] border h-[138px] hronit-shadow"
        >
          <IconCloud stroke={1} size={84} fill="#D2AFFF" />
          <span>From for lead</span>
        </Link>
      </section>
    </div>
  );
}
