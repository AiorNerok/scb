"use client";

import { JobStatus, useStoreJobStatus } from "@/store/JobStatus";

export const JobFilter = () => {
  const { status, toggleStatus } = useStoreJobStatus();

  const mockList: JobStatus[] = ["Active", "Completed"];

  return (
    <aside className="min-w-[233px] flex flex-col gap-3 items-baseline">
      {mockList.map((el) => (
        <p
          key={el}
          onClick={() => toggleStatus(el)}
          className={`text-[28px] font-semibold cursor-pointer ${
            status === el ? "underline-offset-4 decoration-2 underline" : ""
          }`}
        >
          {el}
        </p>
      ))}
    </aside>
  );
};
