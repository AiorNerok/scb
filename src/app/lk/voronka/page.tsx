"use client";

import { Card } from "@/components";
import { useStoreVacanciesStack } from "@/store/VacanciesStack";
import { ActiveLink } from "@/store/activeLink";
import { useLayoutEffect } from "react";

export default function Page() {
  

  const { upd } = ActiveLink();
  useLayoutEffect(() => {
    upd("/lk/voronka");
  }, []);


  const { vacanciesList } = useStoreVacanciesStack();
  return (
    <div className="flex-1 flex flex-row gap-4 flex-wrap pl-5">
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
                LinkFsociety
              />
            );
          })}
    </div>
  );
}
