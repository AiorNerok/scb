"use client";

import { redirect } from "next/navigation";
import { useStoreVacanciesStack } from "@/store/VacanciesStack";
import { RecordProp, useRecordStack } from "@/store/RecordStack";
import { Dropdown, Badge, ItemCandidate } from "@/components";
import { IconAdjustmentsCog } from "@tabler/icons-react";

export default function Page({ params }: { params: { v: string } }) {
  const { vacanciesList } = useStoreVacanciesStack();
  const { Record } = useRecordStack();

  const res = vacanciesList.filter((el) => el.Id === params.v);

  if (res.length === 0) {
    redirect("/voronka");
  }

  const { Title, Stack, Language, Developers, Id } = res[0];

  let candidate: RecordProp[] = [];

  Record.forEach((el) => {
    if (!el.isBest) return;
    if (el.id_vacancies === Id) {
      candidate.push(el);
    }
  });

  return (
    <div className="mx-5 space-y-4">
      <div className="p-[19px] flex flex-col hronit-shadow bg-prime">
        <h2 className="text-[40px] font-semibold">{Title}</h2>
        <div className="flex flex-wrap gap-4">
          {[...Developers, ...Stack, ...Language].map((el) => (
            <Badge text={el} key={el} />
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <Dropdown target={<IconAdjustmentsCog size={40} />}>
          {["All", "Suitable", "Not suitable"].map((el) => (
            <span key={el}>{el}</span>
          ))}
        </Dropdown>
      </div>
      <div className="flex justify-between gap-2">
        {["Contacting", "Тesting", "Interview", "Offer"].map((el, index) => (
          <span
            className={`${
              index === 0 ? "text-white bg-black" : "bg-white text-black"
            } border rounded-md flex-1 border-black text-center cursor-pointer`}
            key={el}
          >
            {el}
          </span>
        ))}
      </div>
      <div className="space-y-4">
        {candidate.map((el) => {
          return (
            <ItemCandidate
              isBest={el.isBest}
              ID={el.ID}
              desc={el.Description}
              img={el.img!}
              name={el.Name}
              key={el.ID}
            />
          );
        })}
      </div>
    </div>
  );
}
