"use client";

import { redirect } from "next/navigation";
import { useStoreVacanciesStack } from "@/store/VacanciesStack";
import { useRecordStack, RecordProp } from "@/store/RecordStack";
import { Dropdown, Badge, ItemCandidate } from "@/components";
import { IconAdjustmentsCog, IconWand } from "@tabler/icons-react";

export default function Page({ params }: { params: { v: string } }) {
  const { vacanciesList } = useStoreVacanciesStack();

  const { Record, DelReacord } = useRecordStack();

  const res = vacanciesList.filter((el) => el.Id === params.v);

  if (res.length === 0) {
    redirect("/lk");
  }

  const { Title, Stack, Language, Developers, Id } = res[0];

  let candidate: RecordProp[] = [];

  Record.forEach((el) => {
    if (el.isBest) return;
    if (el.id_vacancies === Id) {
      candidate.push(el);
    }
  });

  function choose() {
    DelReacord("08ad28f16-ecfb-4aef-a1df-8ba2b2c8f3dcd");
    DelReacord("08ad8fe16-ecfb-4aef-a1df-8ba2b2c8f3cd");
  }

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

        <button
          onClick={() => {
            if (!!candidate.length) {
              choose();
            }
          }}
          className="w-[213px] h-[52px] flex items-center justify-center hronit-shadow bg-[#CEFF1A]"
        >
          <span>
            <IconWand />
          </span>
          <span className="translate-x-3">Magic search</span>
        </button>
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
