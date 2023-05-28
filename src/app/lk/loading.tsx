import BB from "@/assets/bb.png";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="pl-4">
      <Image src={BB} alt="big brother watching you" />
    </div>
  );
}
