import { Navigation } from "../Molecules";

const mockNavigationLinks = [
  {
    href: "/lk",
    label: "Jobs",
    listChildLink: ["/lk", "/lk/create","/lk/create/job"],
  },
  {
    href: "/lk/voronka",
    label: "Voronka",
    listChildLink: ["/lk/voronka"],
  },
  {
    href: "/lk/favorites",
    label: "Favorites",
    listChildLink: ["/lk/favorites"],
  },
  {
    href: "/lk/notifications",
    label: "Notifications",
    listChildLink: ["/lk/notifications"],
  },
  {
    href: "/lk/calendar",
    label: "Calendar",
    listChildLink: ["/lk/calendar"],
  },
  {
    href: "/lk/settings",
    label: "Settings",
    listChildLink: ["/lk/settings"],
  },
];

export const Navbar = () => {
  return (
    <nav className="hronit-shadow w-[252px] bg-prime h-fit flex flex-col gap-2 pt-[165px] pb-[75px]">
      <Navigation ListLinks={mockNavigationLinks} />
    </nav>
  );
};
