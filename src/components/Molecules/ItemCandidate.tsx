import { IconHeart, IconMail, IconMinus, IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import { useRecordStack } from "@/store/RecordStack";

type Props = {
  img?: string;
  name: string;
  desc: string;
  ID: string;
  isBest?: boolean;
};

export const ItemCandidate = ({
  img,
  name,
  desc,
  ID,
  isBest = false,
}: Props) => {
  const { toggleBest } = useRecordStack();

  return (
    <div className="flex flex-row justify-between">
      <div className="mr-14">
        {img !== undefined ? (
          <Image
            width={100}
            height={100}
            className="rounded-2xl"
            src={img}
            alt="kartinka"
          />
        ) : (
          <div className="w-[100px] h-[100px] rounded-2xl bg-slate-500"></div>
        )}
      </div>
      <div className="flex-1 ">
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>

      <div className="flex flex-row gap-9 items-center ">
        <IconMail size={40} />
        <IconHeart size={40} />
        {!isBest ? (
          <button onClick={() => toggleBest(ID)}>
            <IconPlus size={40} />
          </button>
        ) : (
          <button onClick={() => toggleBest(ID)}>
            <IconMinus size={40} />
          </button>
        )}
      </div>
    </div>
  );
};
