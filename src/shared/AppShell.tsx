import { Header, Navbar } from "@/components";

type Props = {
  children: React.ReactNode;
};

export const AppShell = ({ children }: Props) => {
  return (
    <div className="container max-w-[1440px] mx-auto h-screen flex flex-col">
      <Header />
      <div className="flex">
        <Navbar />
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
};
