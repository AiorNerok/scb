"use client";
import { Card, JobFilter } from "@/components";
import Link from "next/link";

import { useStoreVacanciesStack } from "@/store/VacanciesStack";
import { useStoreJobStatus } from "@/store/JobStatus";
import { ActiveLink } from "@/store/activeLink";
import { useLayoutEffect } from "react";

export default function PageLk() {
  const { vacanciesList, toggleStatusID } = useStoreVacanciesStack();
  const { status } = useStoreJobStatus();
  const {upd} = ActiveLink()


  useLayoutEffect(()=>{
    upd('/lk')
  },[])

  return (
    <main className="flex-1 pl-5 w-full inline-flex flex-wrap flex-row gap-3 ">
        {status === "Active" && (
          <div className="flex-1 flex flex-row gap-4 flex-wrap">
            {vacanciesList &&
              vacanciesList
                .filter((el) => el.isActive === true)
                .map((el) => {
                  const bandgeList = [
                    el.Department,
                    ...el.Developers,
                    el.Grade,
                    ...el.ProgrammingLanguage,
                  ];

                  return (
                    <Card
                      key={el.Id}
                      title={el.Title}
                      isActive={el.isActive}
                      badgeList={bandgeList}
                      id={el.Id}
                      Id_v={el.Id}
                      toggleActiveFn={toggleStatusID}
                    />
                  );
                })}

            <Link href={"/lk/create"} className="inline-block">
              <Card emptyCard />
            </Link>
          </div>
        )}

        {status === "Completed" && (
          <div className="flex-1 flex flex-row gap-4">
            {vacanciesList &&
              vacanciesList
                .filter((el) => el.isActive === false)
                .map((el) => {
                  const bandgeList = [
                    el.Department,
                    ...el.Developers,
                    el.Grade,
                    ...el.ProgrammingLanguage,
                  ];

                  return (
                    <Card
                      key={el.Id}
                      title={el.Title}
                      isActive={el.isActive}
                      badgeList={bandgeList}
                      id={el.Id}
                      toggleActiveFn={toggleStatusID}
                    />
                  );
                })}
          </div>
        )}

      <JobFilter />
    </main>
  );
}
