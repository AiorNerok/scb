import { IconHeart, IconMail, IconPlus } from "@tabler/icons-react";
import Image from "next/image";

type Props = {
  img?: string;
  name: string;
  desc: string;
};

export const ItemCandidat = ({ img, name, desc }: Props) => {
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
        <IconPlus size={40} />
      </div>
    </div>
  );
};
