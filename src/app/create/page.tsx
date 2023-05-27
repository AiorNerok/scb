import Logo from "@/assets/logo.svg";
import { FormCreation } from "@/components";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full py-5 min-h-screen bg-prime-bg ">
      <main className="max-w-[1240px] mx-auto flex flex-col items-start justify-start space-y-5">
        <div>
          <Image src={Logo} alt="logo" />
        </div>
        <section className="w-[1240px] pt-16 pl-24 pb-16 bg-white hronit-shadow">
          <div className="flex flex-row justify-between">
            <FormCreation />
          </div>
        </section>
      </main>
    </div>
  );
}
