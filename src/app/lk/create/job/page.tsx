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
    Record,
    PositionUpdate,
    NameMutation,
    Clean,
    RecordMutation,
    Expectations,
  } = useRecordCreation();

  const { vacanciesListUpdate } = useStoreVacanciesStack();

  return (
    <div className="flex">
      <form className="flex flex-1 flex-col gap-3 pb-10" onSubmit={() => ({})}>
        <div className="px-6 flex flex-col gap-4 justify-between w-[586px]">
          {Position === StatusPositionFilter[0] && (
            <DynamicExperience
              BeforeBegin={
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
              }
            />
          )}

          {Position === StatusPositionFilter[1] && (
            <DynamicExpectations
              AfterEnd={
                <>
                  <label htmlFor="comment">
                    A comment
                    <textarea
                      name=""
                      id="comment"
                      cols={30}
                      rows={5}
                      onChange={(e) =>
                        RecordMutation({ Comment: e.target.value })
                      }
                      className="border focus:outline-none px-4 py-2 w-full border-black"
                    />
                  </label>
                  <button
                    onClick={() => PositionUpdate("Publication")}
                    type="button"
                    className="hronit-shadow bg-[#CEFF1A] text-black w-[135px] px-8 py-3"
                  >
                    Continue
                  </button>
                </>
              }
            />
          )}

          {Position === StatusPositionFilter[2] && (
            <DynamicPublication
              AfterEnd={
                <>
                  <div>
                    <h2>Benefits</h2>
                    <p className="whitespace-pre-line break-words">
                      {Record.Comment}
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        vacanciesListUpdate({
                          Id: '123312dwqw-awdqwfqwf-csacascawq',
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
                          Comment: Record.Comment,
                          Salary: Expectations.Salary,
                          Engagement: Expectations.Engagement,
                          ProvidingRelocation: Expectations.ProvidingRelocation,
                          WorkType: Expectations.WorkType,
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
                </>
              }
            />
          )}
        </div>
      </form>
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
