"use client";

import { redirect } from "next/navigation";
import { useStoreVacanciesStack } from "@/store/VacanciesStack";
import { RecordProp, useRecordStack } from "@/store/RecordStack";
import { Badge } from "@/components/Atoms";
import { Dropdown } from "@/components";
import { IconAdjustmentsCog, IconWand } from "@tabler/icons-react";
import { ItemCandidat } from "@/components/Molecules/ItemCandidat";

export default function Page({ params }: { params: { v: string } }) {
  const { vacanciesList } = useStoreVacanciesStack();
  const { Record } = useRecordStack();

  const res = vacanciesList.filter((el) => el.Id === params.v);

  if (res.length === 0) {
    redirect("/voronka");
  }

  const { Title, Stack, Language, Developers } = res[0];

  let candidate: RecordProp[] = [];

  Record.forEach((el) => {
    if (!el.isBest) return;

    return Developers.map((v) => {
      if (el.Developers.includes(v)) {
        candidate.push(el);
      }
    });
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

      <div className="space-y-4">
        {candidate.map((el) => {
          return (
            <ItemCandidat
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
