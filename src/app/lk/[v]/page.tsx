"use client";

import { redirect } from "next/navigation";
import { useStoreVacanciesStack } from "@/store/VacanciesStack";
import { useRecordStack, RecordProp } from "@/store/RecordStack";
import { Dropdown, Badge, ItemCandidate } from "@/components";
import { IconAdjustmentsCog, IconWand } from "@tabler/icons-react";

function choose(choices: any[]) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

export default function Page({ params }: { params: { v: string } }) {
  const { vacanciesList } = useStoreVacanciesStack();

  const { Record, toggleBest } = useRecordStack();

  const res = vacanciesList.filter((el) => el.Id === params.v);

  if (res.length === 0) {
    redirect("/lk");
  }

  const { Title, Stack, Language, Developers } = res[0];

  let candidate: RecordProp[] = [];

  Record.forEach((el) => {
    if (el.isBest) return;

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

        <button
          onClick={() => {
            if (!!candidate.length) {
              toggleBest(choose(candidate)["ID"]);
            }
          }}
          className="w-[213px] h-[52px] flex items-center justify-center hronit-shadow bg-[#CEFF1A]"
        >
          <span>
            <IconWand className="pr-4" />
          </span>
          <span>Magic search</span>
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
