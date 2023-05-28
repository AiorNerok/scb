import { Header, Navbar } from "@/components";
import Router from "next/router";
import NProgress from "nprogress"; module
import "nprogress/nprogress.css";

type Props = {
  children: React.ReactNode;
};


Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

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
