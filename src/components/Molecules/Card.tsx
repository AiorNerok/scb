"use client";
import { IconMenu2, IconPlus } from "@tabler/icons-react";
import { Dropdown } from "./Dropdown";
import { Badge } from "../Atoms";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  emptyCard?: boolean;
  title?: string;
  badgeList?: string[];
  isActive?: boolean;
  id?: string;
  Id_v?: string;
  LinkFsociety?: boolean;
  toggleActiveFn?: (id: string) => void;
};

export default function Card({
  title,
  badgeList,
  id,
  toggleActiveFn,
  emptyCard = false,
  Id_v,
  isActive,
  LinkFsociety = false,
}: Props) {
  const router = useRouter();

  if (emptyCard) {
    return (
      <div className="hronit-shadow w-[286px] h-[246px] flex items-center justify-center border">
        <IconPlus size={136} />
      </div>
    );
  }

  return (
    <div
      className={`hronit-shadow w-[286px] h-[246px] flex flex-col border p-5 ${
        isActive ? "bg-prime" : "bg-prime/60"
      }`}
    >
      <div className="flex justify-between mb-5">
        {LinkFsociety ? (
          <Link href={`/lk/voronka/${Id_v}`}>
            <h3 className="text-2xl font-bold">{title}</h3>
          </Link>
        ) : (
          <Link href={`/lk/${Id_v}`}>
            <h3 className="text-2xl font-bold">{title}</h3>
          </Link>
        )}
        <Dropdown
          target={
            <>
              <IconMenu2 />
            </>
          }
        >
          <span>Edit</span>
          <span>Fill a vacancy</span>
          <span onClick={() => router.push(`/${id}`)}>Send job link</span>
          <span>Download pdf</span>
          <span
            className="block w-full h-full text-left"
            onClick={() => {
              if (id !== undefined && toggleActiveFn !== undefined) {
                toggleActiveFn(id);
              }
            }}
          >
            {isActive ? "Completed" : "Restart"}
          </span>
        </Dropdown>
      </div>
      <div className="flex flex-wrap gap-2">
        {badgeList && badgeList.map((el) => <Badge key={el} text={el} />)}
      </div>
    </div>
  );
}
