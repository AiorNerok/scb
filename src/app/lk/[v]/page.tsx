"use client";

import { redirect } from "next/navigation";
import { useStoreVacanciesStack } from "@/store/VacanciesStack";
import { useRecordStack } from "@/store/RecordStack";
import { Badge } from "@/components/Atoms";
import { Dropdown } from "@/components";
import { IconAdjustmentsCog, IconWand } from "@tabler/icons-react";
import { ItemCandidat } from "@/components/Molecules/ItemCandidat";

export default function Page({ params }: { params: { v: string } }) {
  const { vacanciesList } = useStoreVacanciesStack();
  const { Record } = useRecordStack();

  const res = vacanciesList.filter((el) => el.Id === params.v);

  if (res.length === 0) {
    redirect("/lk");
  }

  const { Title, Stack, Language, Developers } = res[0];

  const candidate = Record.filter((el) => {
    return Developers.filter((i) => Developers.includes(i));
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

        <button className="w-[213px] h-[52px] flex items-center justify-center hronit-shadow bg-[#CEFF1A]">
          <IconWand />
          Magic search
        </button>
      </div>

      <div className="space-y-4">
        {candidate.map((el) => {
          return (
            <ItemCandidat
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
