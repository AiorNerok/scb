"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useStoreVacanciesStack } from "@/store/VacanciesStack";
import { useStaticData } from "@/store/StaticData";
import { useRecordCreation } from "@/store/RecordCreation";
import React from "react";

const DynamicExperience = dynamic(
  () => import("@/components/Organisms/FormCreationPart/Experience"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DynamicExpectations = dynamic(
  () => import("@/components/Organisms/FormCreationPart/Expectations"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DynamicPublication = dynamic(
  () => import("@/components/Organisms/FormCreationPart/Publication"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default function Page() {
  const router = useRouter();

  const { StatusPositionFilter } = useStaticData();

  const {
    Position,
    Name,
    Expectations,
    Record,
    PositionUpdate,
    NameMutation,
    RecordMutation,
    Clean,
  } = useRecordCreation();

  const { vacanciesListUpdate } = useStoreVacanciesStack();

  return (
    <div className="px-6 flex flex-row gap-4 justify-between">
      {Position === StatusPositionFilter[0] && (
        <div className="flex-1 max-w-[586px] w-full space-y-3 pb-6">
          <label>
            Job Title
            <input
              type="text"
              className="border focus:outline-none px-4 py-2 w-full border-black"
              placeholder="Job Title"
              value={Name}
              onChange={(e) => NameMutation(e.target.value)}
            />
          </label>
          <DynamicExperience />
        </div>
      )}

      {Position === StatusPositionFilter[1] && (
        <div className="flex-1 max-w-[586px] w-full space-y-3 pb-6">
          <DynamicExpectations />
          <button
            onClick={() => PositionUpdate("Publication")}
            type="button"
            className="hronit-shadow bg-[#CEFF1A] text-black w-[135px] px-8 py-3"
          >
            Continue
          </button>
        </div>
      )}

      {Position === StatusPositionFilter[2] && (
        <div className="flex-1 max-w-[586px] w-full space-y-3 pb-6">
          <DynamicPublication />
          <div>
            <button
              onClick={() => {
                vacanciesListUpdate({
                  Id: crypto.randomUUID(),
                  Title: Name,
                  Department: Record.Department,
                  Specialization: Record.Specialization,
                  Developers: Record.Developers,
                  ProgrammingLanguage: Record.ProgrammingLanguage,
                  Stack: Record.Stack,
                  DB: Record.DB,
                  Grade: Record.Grade,
                  Language: Record.Language,
                  Description: Record.Description,
                  isActive: true,
                });
                router.push("/lk");
                Clean();
                PositionUpdate("Experience");
              }}
              type="button"
              className="w-full hronit-shadow  disabled:bg-gray-300 bg-[#CEFF1A] text-black px-8 py-3"
            >
              Publish
            </button>
          </div>
        </div>
      )}

      <aside className="min-w-[233px] flex flex-col gap-3 items-baseline w-[200px]">
        {StatusPositionFilter.map((el) => (
          <p
            key={el}
            className={` ${
              Position === el
                ? "underline-offset-4 decoration-2 underline text-3xl"
                : "text-xl "
            } font-semibold cursor-pointer`}
          >
            {el}
          </p>
        ))}
      </aside>
    </div>
  );
}
