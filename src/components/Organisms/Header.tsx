import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { Dropdown, UserProfile } from "../Molecules";

const mockMenu = [{}];

export const Header = () => {
  return (
    <header className="flex mx-auto items-center justify-between h-[80px] w-full px-3">
      <div>
        <Image src={Logo} alt="logo" />
      </div>
      <div>
        <Dropdown target={<UserProfile />}>
          {["Doing Raz", "Doing Dva", "Doing Mnogo", "Mnogo Raz"].map((el) => (
            <span key={el}>{el}</span>
          ))}
        </Dropdown>
      </div>
    </header>
  );
};
